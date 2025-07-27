import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import rateLimit from "@/lib/rate-limit";

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "http://localhost:3000";

const limiter = rateLimit({ interval: 60 * 1000, uniqueTokenPerInterval: 500 });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const origin = req.headers.origin || req.headers.referer || "";

  if (!origin.startsWith(ALLOWED_ORIGIN)) {
    return res.status(403).json({ error: "Forbidden" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body.formData;
  const { token } = req.body;
  

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const forwardedFor = req.headers["x-forwarded-for"];
    const clientIp = Array.isArray(forwardedFor)
      ? forwardedFor[0]
      : forwardedFor || req.socket.remoteAddress;

    await limiter.check(res, 5, clientIp);

    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <h3>Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email" });
  }
}
