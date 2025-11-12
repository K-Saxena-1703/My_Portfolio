"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Calendar, Award } from "lucide-react"

interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string
  highlights: string[]
  icon?: React.ReactNode
}

interface Certificate {
  name: string
  issuer: string
}

export default function Experience() {
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

  const certificates: Certificate[] = [
    { name: "ChatGPT Certificate", issuer: "Guvi | HCL" },
    { name: "Web Development Certificate", issuer: "EDUCBA" },
    { name: "Vibe Hackathon 2025 Certificate", issuer: "Unstop" },
    { name: "Ministry of Youth Affair & Sports Certificate", issuer: "MYBharat" },
    { name: "Sardar 150 Young Leaders Program", issuer: "MYBharat" },
  ]

  const experiences: ExperienceItem[] = [
    {
      company: "ClaryGuide",
      position: "CEO & Founder",
      period: "2025 - Present",
      description: "CEO & Founder leading ClaryGuide’s innovation, growth, and vision.",
      highlights: [
        "Strategic product leadership",
        "Scalable growth execution",
        "Vision-driven innovation",
      ],
    },
    {
      company: "Self-Employed",
      position: "Full Stack Developer",
      period: "2024 - 2025",
      description: "Building and deploying full-stack web applications with modern technologies.",
      highlights: [
        "Developed Job Opportunities Platform for Jovian",
        "Created ClaryGuide Platform",
        "Deployed projects on Vercel",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-20 md:py-32 relative px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Experience & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Experience */}
          <div className="relative space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6">Experience</h3>
            <div className="relative space-y-6 sm:space-y-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${idx * 150}ms` : "0ms",
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5" />

                  {/* Content */}
                  <div className="ml-8 glass-dark p-4 sm:p-6 rounded-lg glow-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-3">
                      <div className="mb-2 sm:mb-0">
                        <h4 className="text-lg sm:text-xl font-bold">{exp.position}</h4>
                        <p className="text-accent text-xs sm:text-sm">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-2 text-foreground/60 text-xs sm:text-sm whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-foreground/80 mb-4 text-sm sm:text-base">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/70 text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6">Certifications</h3>
            <div className="space-y-3">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className={`glass-dark p-4 sm:p-5 rounded-lg glow-shadow transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${(idx + experiences.length) * 150}ms` : "0ms",
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
