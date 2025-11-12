"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const staticText = "Building digital experiences that matter ";
  const words = ["Code.", "Design.", "Deliver."];

  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const fullSentence = staticText + currentWord;

    let typingSpeed = 100;

    if (!isDeleting && charIndex < fullSentence.length) {
      // typing forward
      const timeout = setTimeout(() => {
        setDisplayText(fullSentence.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (charIndex === fullSentence.length && !isDeleting) {
      // pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > staticText.length) {
      // deleting only the word part
      const timeout = setTimeout(() => {
        setDisplayText(fullSentence.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === staticText.length) {
      // move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, isDeleting, currentWordIndex]);



  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Krishna_Resume.pdf"
    link.download = "Krishna_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <span className="px-4 py-2 rounded-full glass-dark text-accent text-xs sm:text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-gradient">Krishna Saxena</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 transition-all duration-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>




            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center mb-12">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={downloadResume}
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full border border-accent text-accent font-semibold hover:bg-accent/10 transition-all flex items-center justify-center gap-2"
              >
                Download Resume
              </button>
            </div>

            <div className="flex gap-4 sm:gap-6 justify-center md:justify-start mb-16">
              <a
                href="https://github.com/K-Saxena-1703"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:text-accent hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-saxena-6807b2376/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:text-accent hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:k.saxena.1703@gmail.com"
                target="_blank"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:text-accent hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="hidden sm:flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-100 md:h-100">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-5xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-accent/30 backdrop-blur-sm h-80 w-80">
                <Image src="/images/profile-hero.png" alt="Krishna Saxena" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToProjects} className="flex flex-col items-center gap-2">
          <span className="text-xs sm:text-sm text-foreground/50">Scroll</span>
          <ChevronDown className="w-5 h-5 text-accent" />
        </button>
      </div>
    </section>
  )
}
