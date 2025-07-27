"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "../../public/favicon.ico"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 text-[#FFD60A] text-shadow-gold">
          <div className="text-2xl font-bold "><Image src={logo} alt="logo" width={35}/></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-900 transition-colors text-shadow-gold"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className=" hover:text-gray-900 transition-colors text-shadow-gold"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-gray-900 transition-colors text-shadow-gold"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-900 transition-colors text-shadow-gold"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 text-[#FFD60A]">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-gray-900 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-gray-900 transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-gray-900 transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-gray-900 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
