"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, Send, Check } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const mailtoLink = `mailto:k.saxena.1703@gmail.com?subject=New Message from ${name}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setLoading(false)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 md:py-32 relative px-4 sm:px-6">
      <div className="max-w-3xl mx-auto w-full">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Let's Work Together</h2>
          <p className="text-foreground/60 text-center mb-8 sm:mb-12 text-base sm:text-lg">
            Have a project in mind? Let's connect and create something amazing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="glass-dark p-6 sm:p-8 rounded-lg glow-shadow">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 rounded bg-slate-950/50 border border-slate-700 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 rounded bg-slate-950/50 border border-slate-700 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 rounded bg-slate-950/50 border border-slate-700 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className={`w-full py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
                    submitted
                      ? "bg-green-500/20 text-green-400"
                      : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      Sent!
                    </>
                  ) : loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="glass-dark p-4 sm:p-6 rounded-lg">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-1">Email</h3>
                    <a href="mailto:k.saxena.1703@gmail.com" className="text-accent hover:underline text-xs sm:text-sm">
                      k.saxena.1703@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-sm sm:text-base">Let's connect</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { label: "GitHub", url: "https://github.com/K-Saxena-1703" },
                    { label: "LinkedIn", url: "https://www.linkedin.com/in/krishna-saxena-6807b2376/" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded border border-accent text-accent hover:bg-accent/10 text-xs sm:text-base font-medium transition-all"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
