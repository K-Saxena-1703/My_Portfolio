"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Calendar, Award } from "lucide-react"


interface Certificate {
  name: string
  issuer: string
}

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])
  
  const Skills: Certificate[] = [
    { name: "Prompt like a Pro", issuer: "Google | Coursera" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco" },
    { name: "Prompt Engineering", issuer: "LetsUpgrade" },
    { name: "Forward", issuer: "McKinsey.org" },
    { name: "MongoDB", issuer: "ITC Academy" },
    { name: "Power BI", issuer: "Rajiv Academy for Technology & Management, Mathura" },
    { name: "Advance AI Tools", issuer: "Rajiv Academy for Technology & Management, Mathura" },
    { name: "ChatGPT Certification", issuer: "Guvi | HCL" },
    { name: "Web Development Certificate", issuer: "EDUCBA" },
  ]

  const Government: Certificate[] = [
    { name: "National Organ Donation Awareness Quiz", issuer: "By MYBharat" },
    { name: "PADHO INDIA 12 Days Summer Camp", issuer: "By PADHO INDIA" },
    { name: "VBYLD 2026", issuer: "By MYBharat" },
    { name: "My Bharat Budget Quest 2026", issuer: "By MYBharat" },
    { name: "nasha Mukt Yuva", issuer: "By MYBharat" },
    { name: "Sardar 150 Young Leaders Program", issuer: "By MYBharat" },
    { name: "Viksit Uttar Pradesh @2047", issuer: "By Uttar Pradesh Government" },
    { name: "Digital Road Safety", issuer: "By Road Safety India" },
    { name: "Lifestyle for the Environment", issuer: "By MyGOV | NITI Aayog" },
  ]


  return (
    <section id="certifications" ref={ref} className="py-16 sm:py-20 md:py-32 relative px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6">Skills</h3>
            <div className="space-y-3">
              {Skills.map((cert, idx) => (
                <div
                  key={idx}
                  className={`glass-dark p-4 sm:p-5 rounded-lg glow-shadow transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${(idx + Skills.length) * 150}ms` : "0ms",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-foreground">{cert.name}</h4>
                      <p className="text-accent text-xs sm:text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            {/* Government */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6">Government</h3>
            <div className="space-y-3">
              {Government.map((cert, idx) => (
                <div
                  key={idx}
                  className={`glass-dark p-4 sm:p-5 rounded-lg glow-shadow transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${(idx + Government.length) * 150}ms` : "0ms",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-foreground">{cert.name}</h4>
                      <p className="text-accent text-xs sm:text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
