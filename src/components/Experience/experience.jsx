import React from "react";
import "./experience.css";
import { BsBriefcase } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import GlowCard from "../GlowCard/glowcard";

const experiences = [
  {
    id: 1,
    title: "Backend Developer Intern",
    company: "Accron Revolutions",
    companyWebsite: "https://www.accronautobot.com/",
    duration: "Jan 2025 - Present",
    description: [
      "Contributed to real-world projects including POS systems, order management platforms, websites, and mobile apps.",
      "Developed and maintained scalable backend features using Firebase and RESTful APIs.",
      "Structured and optimized Firestore (NoSQL) databases for performance and reliability.",
      "Implemented new backend functionalities, debugged existing code, and improved system architecture.",
      "Integrated APIs and connected cloud-based services to ensure smooth data flow across systems.",
      "Tested application performance and handled bug fixes to ensure stable production deployments.",
      "Collaborated with cross-functional teams to align backend development with frontend components built in Next.js.",
      "Occasionally contributed to frontend development and UI adjustments when needed.",
      "Gained hands-on experience with agile workflows, code versioning (Git), and real-time feature testing."
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "JavaScript",
      "NoSQL",
      "Node.js",
      "Express.js"
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
