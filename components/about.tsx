"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function About() {
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

  const education = [
    {
      level: "Class 10",
      percentage: "91%",
      school: "Parmeshwari Devi Dhanuka Saraswati Vidya Mandir, Vrindavan",
      board: "CBSE",
    },
    { level: "Class 12", percentage: "70%", school: "Kanha Makhan Millennium School, Mathura", board: "CBSE" },
    {
      level: "BCA (Pursuing)",
      percentage: "-",
      school: "Rajiv Academy for Technology and Management, Mathura",
      board: "College",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 md:py-32 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-90">
              <Image
                src="/images/profile.jpg"
                alt="Krishna Saxena"
                fill
                className="rounded-2xl object-cover glow-shadow"
                priority
              />
              <div className="absolute inset-0 rounded-2xl border border-accent/30 pointer-events-none" />
            </div>
          </div>

          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              I'm a Full Stack Developer passionate about crafting beautiful and functional web experiences. With
              expertise in modern web technologies, I build scalable applications that solve real-world problems.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              Currently pursuing BCA at Rajiv Academy for Technology and Management, I'm dedicated to improving my
              coding skills and gaining hands-on experience through active projects. I love exploring new technologies
              and contributing to innovative solutions.
            </p>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              When I'm not coding, you can find me playing table tennis or exploring new web technologies. Passionate
              about learning and continuously improving my craft.
            </p>
          </div>

          <div
            className={`col-span-1 md:col-span-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-accent">Education</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-dark p-4 sm:p-6 rounded-lg glow-shadow">
                  <h4 className="text-accent font-semibold mb-2 text-sm sm:text-base">{edu.level}</h4>
                  <p className="text-foreground text-xs sm:text-sm font-medium mb-2">{edu.school}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70 text-xs">{edu.board}</span>
                    {edu.percentage !== "-" && <span className="text-primary font-bold text-sm">{edu.percentage}</span>}
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
