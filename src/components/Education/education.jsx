import React from "react";
import "./education.css";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../GlowCard/glowcard";

const educations = [
  {
    id: 1,
    title: "BSc (Hons) in Computer Science",
    grade: "First-Class Honours",
    institution:
      "APIIT Sri Lanka (affiliated with University of Staffordshire, UK)",
    duration: "March 2024 - December 2024",
    gpa: "4.0",
    coursework:
      "Web Frameworks, Emerging Technologies, Decision Analytics, Final Year Project",
  },
  {
    id: 2,
    title: "Pearson BTEC HND in Computing (Software Engineering)",
    grade: "Completed",
    institution: "APIIT Sri Lanka",
    duration: "April 2022 - December 2023",
    coursework:
      "Database, Networking, Professional Practice, Programming, Computer System Architecture, Managing Successful Computing Project, Security, Web Design Development, Advanced Programming, Business Intelligence, Computer Research Project, System Analysis Design, Application Programming Interface, Data Structures and Algorithms, Discrete Mathematics",
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
                    <br />
                    <span className="education-grade">
                      Grade: {education.grade}
                    </span>
                  </h3>
                  <p className="education-institution">
                    {education.institution}
                  </p>
                  {education.coursework && (
                    <p className="education-coursework">
                      <strong>Relevant Coursework: </strong>
                      {education.coursework}
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
