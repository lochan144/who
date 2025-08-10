"use client"

import { useState } from "react"
import Link from "next/link"

// Certifications data
const certifications = [
  {
    id: 1,
    title: "Statistics Foundations",
    institution: "Meta",
    year: "2025",
    description: "Comprehensive foundation in statistical analysis, probability theory, and data interpretation techniques essential for data-driven decision making.",
    credentialLink: "#"
  },
  {
    id: 2,
    title: "Generative AI: Introduction and Applications",
    institution: "IBM",
    year: "2024",
    description: "Deep dive into generative artificial intelligence technologies, including large language models, prompt engineering, and practical AI applications.",
    credentialLink: "#"
  },
  {
    id: 3,
    title: "Python Programming",
    institution: "University of Michigan",
    year: "2024",
    description: "Advanced Python programming covering data structures, algorithms, object-oriented programming, and application development best practices.",
    credentialLink: "#"
  },
  {
    id: 4,
    title: "Software Engineering: Modeling Software Systems using UML",
    institution: "The Hong Kong University of Science and Technology",
    year: "2024",
    description: "Professional training in software modeling, system design using UML diagrams, and architectural planning for complex software systems.",
    credentialLink: "#"
  },
  {
    id: 5,
    title: "The Bits and Bytes of Computer Networking",
    institution: "Google",
    year: "2024",
    description: "Comprehensive understanding of network protocols, TCP/IP, network troubleshooting, and modern networking infrastructure fundamentals.",
    credentialLink: "#"
  },
  {
    id: 6,
    title: "The Structured Query Language (SQL)",
    institution: "University of Colorado Boulder",
    year: "2024",
    description: "Advanced SQL programming including complex queries, database design, optimization techniques, and data manipulation best practices.",
    credentialLink: "#"
  }
]

const CertificationsContent = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedCertifications = showAll ? certifications : certifications.slice(0, 5)

  return (
    <div className="space-y-8">
      {displayedCertifications.map((cert, index) => (
        <div key={cert.id} className="space-y-2">
          <h2 className="text-lg font-medium text-gray-900">{cert.title}</h2>
          <p className="text-gray-600 text-base">{cert.institution} • {cert.year}</p>
          <p className="text-gray-600 text-base leading-relaxed">
            {cert.description}
          </p>
          <div className="pt-2">
            <Link 
              href={cert.credentialLink} 
              className="text-sm text-gray-900 underline hover:text-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Credentials →
            </Link>
          </div>
          {index < displayedCertifications.length - 1 && (
            <div className="pt-6 border-b border-gray-200"></div>
          )}
        </div>
      ))}
      
      {certifications.length > 5 && (
        <div className="pt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center text-gray-900 text-base font-medium hover:text-gray-700 transition-colors"
          >
            {showAll ? "View Less" : "View More"}
            <svg 
              className={`ml-2 w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "certifications", label: "certifications" },
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
            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                I'm a final-year BCA student specializing in Data Analytics at Jain University, Bangalore, driven by curiosity for how data and intelligence shape real-world systems. My academic journey has steadily gravitated toward artificial intelligence and machine learning, where I'm most engaged in turning concepts into tangible, impactful solutions.
              </p>
              <p>
                I'm currently involved in a collaborative research initiative between Jain University and IIT Tirupati, focusing on positioning, navigation, and timing (PNT) technologies. This work has strengthened my skills in problem-solving, experimentation, and collaborating with interdisciplinary teams to tackle complex technical challenges.
              </p>
              <p>
                My approach to technology is rooted in practicality—solutions must not only work but also serve a meaningful purpose. I'm constantly seeking opportunities to deepen my expertise in AI/ML while staying open to emerging areas where intelligent systems can bring measurable change.
              </p>
              <p>
                You can gain further insights into my background and interests through my{" "}
                <button onClick={() => setActiveSection("projects")} className="text-gray-900 underline italic">
                  projects
                </button>
                .
              </p>
            </div>

            <div className="pt-4">
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
            </div>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-8">
            <h1 className="text-2xl font-medium text-gray-900">Projects</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Here's a glimpse into my current research work and ongoing projects. I'm passionate about applying 
              theoretical knowledge to solve real-world challenges in technology and data science.
            </p>

            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900">STAR-PNT Research Initiative</h2>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Currently Working
                  </span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Actively contributing to cutting-edge research in Positioning, Navigation, and Timing (PNT) technologies 
                  as part of a collaborative initiative between Jain University and IIT Tirupati. This research focuses on 
                  satellite navigation systems, embedded systems integration, and signal intelligence applications. Working 
                  with interdisciplinary teams to advance next-generation navigation technologies and their practical implementations 
                  in various domains.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>• Satellite Navigation</span>
                  <span>• Signal Processing</span>
                  <span>• Embedded Systems</span>
                  <span>• Research Collaboration</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900">Additional Projects</h2>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  I'm currently developing several exciting projects that showcase my expertise in data analytics, 
                  machine learning, and software development. These projects will demonstrate practical applications 
                  of AI/ML technologies and innovative solutions to contemporary challenges. Stay tuned for updates 
                  on these upcoming initiatives.
                </p>
              </div>
            </div>
          </div>
        )

      case "certifications":
        return (
          <div className="space-y-8">
            <h1 className="text-2xl font-medium text-gray-900">Certifications</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Professional certifications and achievements that demonstrate my expertise and commitment to continuous
              learning across data analytics, artificial intelligence, and software development.
            </p>

            <CertificationsContent />
          </div>
        )

      case "education":
        return (
          <div className="space-y-8">
            <h1 className="text-2xl font-medium text-gray-900">Education</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              My academic background and formal education that laid the foundation for my career in technology.
            </p>

            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Bachelor of Computer Applications</h2>
                <p className="text-gray-600 text-base">Jain Deemed-to-be University • Expected Graduation: May 2027</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Currently pursuing BCA with specialization in Data Analytics. Focus on building strong foundations in computer science fundamentals while exploring data-driven solutions and artificial intelligence applications.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  <span className="font-medium">Relevant Coursework:</span> CS Fundamentals, Software Engineering, Database Management System, Data Analytics
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Higher Secondary Education (11th & 12th Commerce)</h2>
                <p className="text-gray-600 text-base">MES Kishore Kendra • 2021-2023</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Completed higher secondary education with a commerce background. This diverse foundation provided analytical thinking skills and business acumen that complement my technical studies.
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
              My professional journey and research experiences that have shaped my expertise in technology, sustainability, and advanced research applications.
            </p>

            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">Summer Research Intern, STAR-PNT Program</h2>
                <p className="text-gray-600 text-base">Indian Institute of Technology, Tirupati • July 2024 - Present</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Selected for the prestigious STAR-PNT Summer Internship Program, engaging in cutting-edge research at the intersection of satellite navigation, embedded systems, and signal intelligence. Working under guidance from leading faculty in Positioning, Navigation, and Tracking (PNT) systems, contributing to advanced research initiatives in collaboration between IIT Tirupati and Jain University.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">Frontend Developer</h2>
                <p className="text-gray-600 text-base">GenX Reality • January 2025 - July 2025 (Remote)</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Built a comprehensive landing page for the company, ensuring modern and user-friendly interface design. Contributed to AI/ML initiatives in augmented reality (AR) and virtual reality (VR) applications, supporting the development of immersive experiences. Additionally managed social media accounts to enhance online presence and engagement, demonstrating versatility in both technical development and digital marketing domains.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">Intern, Green Internship Program</h2>
                <p className="text-gray-600 text-base">1M1B (1 Million for 1 Billion) • December 2024 - February 2025 (Remote)</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Led sustainability campaigns that secured 50+ pledges while promoting green practices across various platforms. Conducted comprehensive energy audits and provided strategic waste-reduction recommendations for campus sustainability initiatives. Built an entire Tableau dashboard for tracking and visualizing key sustainability metrics, enabling data-driven decision making for environmental initiatives. Collaborated effectively with cross-functional teams to deliver projects on schedule while developing strong stakeholder engagement capabilities.
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
              Feel free to reach out if you'd like to collaborate, have questions about my work, or just want to
              connect.
            </p>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Get in Touch</h2>
                <div className="space-y-2">
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
                  full-time developer, consultant, or collaborator, I'd love to hear about what you're working on.
                </p>
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
