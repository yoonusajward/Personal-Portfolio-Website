import React from "react";
import "./education.css";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../GlowCard/glowcard";

const educations = [
  {
    id: 1,
    title: "BSc (Hons) in Computer Science",
    grade: "First-Class Honours",
    institution: "APIIT Sri Lanka (in affiliation with Staffordshire University, UK)",
    duration: "March 2024 – December 2024",
    gpa: "4.0",
    coursework: "Web Frameworks, Emerging Technologies, Decision Analytics, Final Year Project"
  },
  {
    id: 2,
    title: "Pearson BTEC HND in Computing (Software Engineering)",
    grade: "Grade Pass",
    institution: "APIIT Sri Lanka",
    duration: "April 2022 – December 2023"
    // Coursework not shown intentionally for brevity
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-title-container">
        <div className="education-divider"></div>
        <h2 className="education-title">Education</h2>
        <div className="education-divider"></div>
      </div>

      <div className="education-grid">
        {educations.map((education) => (
          <GlowCard key={education.id} identifier={`education-${education.id}`}>
            <div className="education-card">
              <div className="education-duration">{education.duration}</div>
              <div className="education-content">
                <div className="education-icon">
                  <BsPersonWorkspace size={36} />
                </div>
                <div>
                  <h3 className="education-degree">
                    {education.title}
                    {education.grade && (
                      <>
                        <br />
                        <span className="education-grade">Grade: {education.grade}</span>
                      </>
                    )}
                  </h3>
                  <p className="education-institution">{education.institution}</p>
                  {education.coursework && (
                    <p className="education-coursework">
                      <strong>Relevant Coursework:</strong> {education.coursework}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Education;
