"use client"

import { useState } from "react"
import Link from "next/link"

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!accessKey) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          email: email,
          message: message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setEmail("")
        setMessage("")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900 bg-white"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none text-gray-900 bg-white"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitStatus === "success" && (
        <p className="text-sm text-green-600">Message sent successfully! I'll get back to you soon.</p>
      )}

      {submitStatus === "error" && (
        <p className="text-sm text-red-600">Failed to send message. Please try again or email me directly.</p>
      )}
    </form>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "education", label: "education" },
    { id: "experience", label: "experience" },
    { id: "contact", label: "contact" },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-medium text-gray-900">Lochan S</h1>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed max-w-2xl">
              <p>
                Final year Computer Science undergraduate at Jain Deemed-to-be University.
              </p>
              <p>
                View my resume for a fuller summary of my background, or explore a few selected projects below.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Resume
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
              <button
                onClick={() => setActiveSection("projects")}
                className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-900 text-sm font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-8">
            <h1 className="text-2xl font-medium text-gray-900">Selected Work</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              A concise selection of work aligned with my resume.
            </p>

            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Landing Page Project at GenX Reality</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Developed a landing page for the company website and helped improve the overall look and user flow.
                  Also supported social media updates for better online visibility.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Tracking Project (PNT Internship)</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Worked on a tracking project during my PNT internship.
                  The project focused on real-time movement updates and clear location status reporting.
                </p>
              </div>
            </div>
          </div>
        )

      case "education":
        return (
          <div className="space-y-8">
            <h1 className="text-2xl font-medium text-gray-900">Education</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              My academic background and formal education.
            </p>

            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Bachelor of Computer Applications</h2>
                <p className="text-gray-600 text-base">Jain Deemed-to-be University • Final Year UG</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Computer Science undergraduate with coursework in core systems and data-oriented subjects.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  <span className="font-medium">Relevant Coursework:</span> CS Fundamentals, Software Engineering, Database Management System, Data Analytics
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Higher Secondary Education (11th & 12th Commerce)</h2>
                <p className="text-gray-600 text-base">MES Kishore Kendra • 2021-2023</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Commerce background with supporting exposure to computer science, statistics, business studies, and accountancy.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  <span className="font-medium">Subjects:</span> Computer Science, Statistics, Business Studies, Accountancy
                </p>
              </div>
            </div>
          </div>
        )

      case "experience":
        return (
          <div className="space-y-8">
            <h1 className="text-2xl font-medium text-gray-900">Experience</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Professional and internship experience.
            </p>

            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">GenX Reality</h2>
                <p className="text-gray-600 text-base">Developer • January 2025 - July 2025 • Remote</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Developed a landing page for the company website and supported social media activities to improve
                  online engagement.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">1M1B (1 Million for 1 Billion)</h2>
                <p className="text-gray-600 text-base">Data Analyst Intern • November 2024 - February 2025 • Remote</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Supported sustainability campaigns, contributed to energy audit activities, and assisted with
                  reporting work during the internship.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">IIT-Tirupathi Navavishkar I-Hub Foundation</h2>
                <p className="text-gray-600 text-base">Intern • July 2025 - September 2025 • Offline</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Worked on a tracking project to monitor movement updates and present location status clearly.
                  Contributed to building and testing the tracking workflow during the internship.
                </p>
              </div>
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-8">
            <h1 className="text-2xl font-medium text-gray-900">Contact</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Open to internships, entry-level roles, and project collaborations.
            </p>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Get in Touch</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 text-base">
                    <span className="font-medium">Phone:</span> +91-9901489222
                  </p>
                  <p className="text-gray-600 text-base">
                    <span className="font-medium">Email:</span>{" "}
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=lochan1917@gmail.com" className="text-gray-900 underline" target="_blank" rel="noopener noreferrer">
                      lochan1917@gmail.com
                    </Link>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Social Links</h2>
                <div className="flex flex-wrap gap-6">
                  <Link href="https://www.linkedin.com/in/lochans" className="text-gray-900 underline hover:text-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                  <Link href="https://github.com/lochan144" className="text-gray-900 underline hover:text-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                  <Link href="https://x.com/Lochan144" className="text-gray-900 underline hover:text-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">
                    Twitter/X
                  </Link>
                  <Link href="https://huggingface.co/lochan144" className="text-gray-900 underline hover:text-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">
                    Hugging Face
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Availability</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  I'm currently open to new opportunities and interesting projects. Whether you're looking for a
                  candidate for an internship or a full-time role, I'd love to hear about what you're working on.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-48 bg-white border-r border-gray-200 p-8">
          <nav className="space-y-2 pt-4 pl-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`block w-full text-left py-1 text-base transition-colors italic ${
                  activeSection === section.id ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
          <div className="max-w-4xl w-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
