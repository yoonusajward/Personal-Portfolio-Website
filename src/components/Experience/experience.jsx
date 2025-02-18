import React from "react";
import "./experience.css";
import { BsBriefcase } from "react-icons/bs";
import GlowCard from "../GlowCard/glowcard";

const experiences = [
  {
    id: 1,
    title: "Backend Developer Intern",
    company: "Accron Revolutions",
    companyWebsite: "https://www.accronautobot.com/",
    duration: "Jan 2025 - Present",
    tools: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Firebase",
      "NoSQL",
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
                    {experience.company}
                    <a
                      href={experience.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-website-link"
                    >
                      (Website)
                    </a>
                  </p>
                  <p className="experience-tools">
                    <strong>Tools & Technologies: </strong>
                    {experience.tools.join(", ")}
                  </p>
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
