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
                <button onClick={() => setActiveSection("projects")} className="text-gray-900 underline">
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
