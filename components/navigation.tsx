"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  scrollY: number
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "glass-dark py-3" : "py-4 sm:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <button onClick={() => handleScroll("hero")} className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Krishna Saxena
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeSection === item.id
                  ? "border-accent text-accent"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-dark border-t mt-2 animate-slideIn">
          <div className="px-4 sm:px-6 py-3 sm:py-4 space-y-2 sm:space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-left py-2 px-3 sm:px-4 rounded text-foreground/70 hover:text-accent hover:bg-white/5 transition-all text-sm sm:text-base"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="block w-full text-center py-2 px-3 sm:px-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm sm:text-base"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
