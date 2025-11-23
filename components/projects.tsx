"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  codeUrl: string
}

export default function Projects() {
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

  const projects: Project[] = [
    {
      title: "ClaryGuide",
      description:
        "An intelligent guidance platform designed to help users navigate complex processes with clear, step-by-step assistance.",
      image: "/claryguide-platform.jpg",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS","Vercel"],
      liveUrl: "https://clary-guide.vercel.app/",
      codeUrl: "https://github.com/BahubaliNalte/ClaryGuide",
    },
    {
      title: "Job Opportunities Platform",
      description:
        "A comprehensive platform connecting job seekers with employers, featuring advanced job search, application management, and recruiter tools.",
      image: "/job-opportunities-platform.jpg",
      tags: ["HTML", "CSS", "BOOTSTRAP", "MUSTACHE.js", "Vercel"],
      liveUrl: "https://jovian-job-opportunities.vercel.app/",
      codeUrl: "https://github.com/K-Saxena-1703",
    },
    {
      title: "Scientific Calculator",
      description:
        "Advanced scientific calculator for precise and complex mathematical computations.",
      image: "/scientific-calculator.png",
      tags: ["HTML", "CSS", "Script.js", "Vercel"],
      liveUrl: "https://scientific-calculator-maths.vercel.app/",
      codeUrl: "https://github.com/K-Saxena-1703/Scientific_Calculator",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 md:py-32 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-foreground/60 mb-8 sm:mb-12 text-base sm:text-lg">
          Showcasing my best work and technical expertise
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`glass-dark rounded-xl overflow-hidden group transition-all duration-700 hover:shadow-2xl hover:shadow-primary/30 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : "0ms",
              }}
            >
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-xs sm:text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-primary/20 text-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded bg-primary hover:bg-primary/80 text-primary-foreground text-xs sm:text-sm font-medium transition-all"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Live
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded border border-accent text-accent hover:bg-accent/10 text-xs sm:text-sm font-medium transition-all"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
