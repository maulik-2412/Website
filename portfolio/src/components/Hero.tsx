import { Button } from "@/components/ui/button";
import profile from "../../public/picofme.png";
import Image from "next/image";



export default function Hero() {
  return (
    <div>

      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between z-1 relative">
            <div className="lg:w-1/2 mb-8 lg:mb-0 ">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-gold">
                Hi, I&apos;m{" "}
                <span className="text-[#FFD60A]">Maulik Tyagi</span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed text-shadow-gold">
                A passionate Full Stack Developer creating amazing web
                experiences with modern technologies and clean code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="transform hover:scale-105 button-glow text-[#FFD60A] bg-[#001D3D]"
                >
                  <a
                    href="/Maulik_Tyagi_CV.pdf"
                    download={true}>Download CV</a>
                  
                </Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/maulik-2412" target="_blank" rel="noopener noreferrer">
                  <svg
                    role="img"
                    className="size-6 text-[#FFD60A] fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/maulik-tyagi-90aa09229/" target="_blank" rel="noopener noreferrer">
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-shadow-gold"
                  >
                    <path
                      d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                      fill="#FFD60A"
                    />
                    <path
                      d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                      fill="#FFD60A"
                    />
                    <path
                      d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                      fill="#FFD60A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                      fill="#FFD60A"
                    />
                  </svg>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:mauliktyagi08@gmail.com" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="size-8 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                      stroke="#FFD60A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center z-1">
              <div className="relative ">
                <Image
                  src={profile}
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-120 h-120 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
