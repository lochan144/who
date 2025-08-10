"use client"

import { useState } from "react"
import Link from "next/link"

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
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                I am a designer and developer at{" "}
                <Link href="#" className="text-gray-900 underline">
                  Company
                </Link>
                . My interests span a broad spectrum of subjects, encompassing web development, creative coding, game
                design, and human-computer interaction.
              </p>
              <p>
                Since high school, I've spent years on algorithm competitions, freelance web design and development. In
                2017, I earned my BSc degree in Computer Science from University, and joined as a software engineer at
                Tech Company. In 2018, I joined Current Company to help build the next generation of developer tools
                including the platform, frameworks, AI tools, and more.
              </p>
              <p>
                You can gain further insights into my background and interests through my{" "}
                <button onClick={() => setActiveSection("projects")} className="text-gray-900 underline">
                  projects
                </button>
                , find me on{" "}
                <Link href="#" className="text-gray-900 underline">
                  GitHub
                </Link>
                ,{" "}
                <Link href="#" className="text-gray-900 underline">
                  X/Twitter
                </Link>
                , and{" "}
                <Link href="#" className="text-gray-900 underline">
                  LinkedIn
                </Link>
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
              Over the past years, I've been super lucky to work with some amazing people, on a variety of great
              projects, ranging from open-source libraries to large-scale applications.
            </p>

            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900">E-Commerce Platform</h2>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Built a full-stack e-commerce platform using React, Node.js, and PostgreSQL. Implemented features like
                  user authentication, payment processing, inventory management, and order tracking. The platform
                  handles over 10,000 daily active users and processes thousands of transactions monthly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900">Mobile Task Manager</h2>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Developed a cross-platform mobile application using React Native for task management and productivity.
                  Features include real-time synchronization, offline support, push notifications, and team
                  collaboration tools. Published on both iOS and Android app stores with 4.8+ star ratings.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-medium text-gray-900">AI Content Generator</h2>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Created an AI-powered content generation tool using OpenAI's API and Next.js. The application helps
                  content creators generate blog posts, social media content, and marketing copy. Implemented user
                  authentication, subscription management, and usage analytics dashboard.
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
              learning.
            </p>

            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">AWS Certified Solutions Architect</h2>
                <p className="text-gray-600 text-base">Amazon Web Services • 2023</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Demonstrated expertise in designing distributed systems on AWS, including compute, networking,
                  storage, and database services.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Google Cloud Professional Developer</h2>
                <p className="text-gray-600 text-base">Google Cloud Platform • 2022</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Certified in building scalable and reliable applications using Google Cloud technologies and best
                  practices.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Meta React Developer Certificate</h2>
                <p className="text-gray-600 text-base">Meta • 2022</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Comprehensive certification covering React fundamentals, advanced patterns, testing, and performance
                  optimization.
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
              My academic background and formal education that laid the foundation for my career in technology.
            </p>

            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Master of Science in Computer Science</h2>
                <p className="text-gray-600 text-base">Stanford University • 2019-2021</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Specialized in Human-Computer Interaction and Machine Learning. Thesis on "Improving User Experience
                  in AI-Powered Applications through Adaptive Interfaces." GPA: 3.9/4.0
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Bachelor of Science in Computer Science</h2>
                <p className="text-gray-600 text-base">University of California, Berkeley • 2015-2019</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Graduated Magna Cum Laude with focus on Software Engineering and Data Structures. Active member of the
                  Computer Science Honor Society and ACM student chapter. GPA: 3.8/4.0
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Relevant Coursework</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Data Structures & Algorithms, Software Engineering, Database Systems, Machine Learning, Human-Computer
                  Interaction, Web Development, Mobile App Development, Computer Networks, Operating Systems
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
              My professional journey and the roles that have shaped my expertise in software development and design.
            </p>

            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">Senior Full Stack Developer</h2>
                <p className="text-gray-600 text-base">Tech Innovations Inc. • 2022 - Present</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Lead development of scalable web applications serving 100K+ users. Architect and implement
                  microservices using Node.js, React, and AWS. Mentor junior developers and collaborate with
                  cross-functional teams to deliver high-quality products on time.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">Software Engineer</h2>
                <p className="text-gray-600 text-base">Digital Solutions Corp. • 2020 - 2022</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Developed and maintained multiple client-facing applications using React, TypeScript, and Python.
                  Improved application performance by 40% through code optimization and database query improvements.
                  Collaborated with UX designers to implement responsive and accessible user interfaces.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-medium text-gray-900">Frontend Developer Intern</h2>
                <p className="text-gray-600 text-base">StartupXYZ • Summer 2019</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Built responsive web components using React and CSS. Participated in agile development processes and
                  contributed to the company's main product used by thousands of customers. Gained experience in version
                  control, testing, and deployment practices.
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
                    <Link href="mailto:your.email@example.com" className="text-gray-900 underline">
                      your.email@example.com
                    </Link>
                  </p>
                  <p className="text-gray-600 text-base">
                    <span className="font-medium">Phone:</span>{" "}
                    <Link href="tel:+1234567890" className="text-gray-900 underline">
                      +1 (234) 567-8900
                    </Link>
                  </p>
                  <p className="text-gray-600 text-base">
                    <span className="font-medium">Location:</span> San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Social Links</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 text-base">
                    <Link href="#" className="text-gray-900 underline">
                      LinkedIn
                    </Link>{" "}
                    - Professional network and career updates
                  </p>
                  <p className="text-gray-600 text-base">
                    <Link href="#" className="text-gray-900 underline">
                      GitHub
                    </Link>{" "}
                    - Code repositories and open source contributions
                  </p>
                  <p className="text-gray-600 text-base">
                    <Link href="#" className="text-gray-900 underline">
                      Twitter/X
                    </Link>{" "}
                    - Thoughts on tech and industry insights
                  </p>
                  <p className="text-gray-600 text-base">
                    <Link href="#" className="text-gray-900 underline">
                      Portfolio
                    </Link>{" "}
                    - Detailed case studies and project showcases
                  </p>
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
