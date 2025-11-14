"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  level: number
  category: string
}

export default function Skills() {
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

  const skills: Skill[] = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 92, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express", level: 75, category: "Backend" },
    { name: "Firebase", level: 80, category: "Database" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Vercel", level: 85, category: "Tools" },
    { name: "REST APIs", level: 85, category: "Tools" },
  ]

  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 md:py-32 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((category, catIdx) => (
            <div key={category}>
              <h3 className="text-base sm:text-lg font-semibold text-accent mb-4 sm:mb-6">{category}</h3>
              <div className="space-y-3 sm:space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, idx) => (
                    <div
                      key={skill.name}
                      className={`transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${(catIdx * 4 + idx) * 50}ms` : "0ms",
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-accent text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: isVisible ? `${(catIdx * 4 + idx) * 50}ms` : "0ms",
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
