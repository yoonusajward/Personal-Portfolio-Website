import React from "react";
import "./experience.css";
import { BsBriefcase } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import GlowCard from "../GlowCard/glowcard";

const experiences = [
  {
    id: 1,
    title: "Associate Software Engineer",
    company: "WIS Sri Lanka",
    companyWebsite: "https://wisaccountancy.co.uk/",
    duration: "September 2025 – Present",
    description: [
      "Building and maintaining full-stack applications using Python, Next.js, MERN, TypeScript, and Tailwind CSS.",
      "Designed and developed scalable backend services and REST APIs while integrating with frontend interfaces.",
      "Implemented responsive and dynamic UI components with Next.js and Tailwind for improved user experience.",
      "Optimized database queries and server-side logic to enhance application performance and reliability.",
      "Collaborated with product managers, designers, and QA engineers to deliver features aligned with business requirements.",
      "Practiced agile development with sprint planning, code reviews, and version control using Git.",
      "Contributed to both greenfield projects and existing systems, balancing innovation with maintenance."
    ],
    tools: [
      "Python",
      "Next.js",
      "MERN Stack",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Agile"
    ],
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Accron Revolutions",
    companyWebsite: "https://www.accronautobot.com/",
    duration: "January 2025 – July 2025",
    description: [
      "Worked on real-world projects including websites, mobile apps, POS systems, and order management platforms.",
      "Built and maintained backend services using Firebase, Node.js, and RESTful APIs.",
      "Designed and optimized Firestore databases to improve data structure and query performance.",
      "Integrated external APIs and managed cloud-based services to streamline data flow across platforms.",
      "Resolved bugs and performance issues in backend logic to ensure stable deployment and user experience.",
      "Collaborated with frontend developers to deliver seamless integration with UI components built in Next.js.",
      "Assisted in frontend enhancements and UI fixes as required.",
      "Participated in agile sprints, version control workflows, and regular feature testing."
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "JavaScript",
      "Express.js",
      "Firebase",
      "Firestore",
      "NoSQL"
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-title-container">
        <div className="experience-divider"></div>
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-divider"></div>
      </div>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <GlowCard
            key={experience.id}
            identifier={`experience-${experience.id}`}
          >
            <div className="experience-card">
              <div className="experience-duration">{experience.duration}</div>
              <div className="experience-content">
                <div className="experience-icon">
                  <BsBriefcase size={36} />
                </div>
                <div>
                  <h3 className="job-title">{experience.title}</h3>
                  <p className="experience-company">
                    {experience.company}{" "}
                    <a
                      href={experience.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-website-link"
                      aria-label={`${experience.company} website`}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </p>
                  <ul className="experience-description-list">
                    {experience.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <div className="experience-tools">
                    <strong>Tools & Technologies:</strong>
                    <div className="tools-badge-container">
                      {experience.tools.map((tool, index) => (
                        <span key={index} className="tool-badge">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Experience;
