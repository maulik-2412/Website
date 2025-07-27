"use client";

import type React from "react";

import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
  const loadReCaptcha = () => {
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    document.body.appendChild(script)
  }

  loadReCaptcha()
}, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: "submit" })


    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({formData, token}),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Retry");
    }
    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FFD60A] text-shadow-gold mb-12">
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#FFD60A] text-shadow-gold mb-6">
                Let&apos;s work together
              </h3>
              <p className="text-lg text-white text-shadow-gold mb-8 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#001D3D] p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#FFD60A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFD60A] text-shadow-gold">
                      Email
                    </h4>
                    <p className="text-white text-shadow-gold">
                      mauliktyagi08@gmail.com
                    </p>
                  </div>
                </div>

                {/*                 <div className="flex items-center space-x-4">
                  <div className="bg-[#001D3D] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#FFD60A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFD60A] text-shadow-gold">Phone</h4>
                    <p className="text-white text-shadow-gold">+</p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-4">
                  <div className="bg-[#001D3D] p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#FFD60A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFD60A] text-shadow-gold">
                      Location
                    </h4>
                    <p className="text-white text-shadow-gold">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="text-[#FFD60A] bg-[#001D3D] box-glow">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className=""
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {status ? (
                    <Button
                      type="submit"
                      className="w-full bg-[#FFC300] hover:bg-[#FFC300] text-[#000814] transform hover:scale-105 button-glow"
                    >
                      {status}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full bg-[#FFC300] hover:bg-[#FFC300] text-[#000814] transform hover:scale-105 button-glow"
                    >
                      Send Message
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
