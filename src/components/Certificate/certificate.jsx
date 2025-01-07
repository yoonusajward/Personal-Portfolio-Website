import React from "react";
import "./certificate.css";
import { FiExternalLink } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const certifications = [
  {
    title: "JavaScript Essential Training",
    organisation: "Cisco Networking Academy",
    skills: "JavaScript fundamentals, Functions, Loops, and DOM scripting",
    date: "Nov 2024",
    link: "https://www.credly.com/badges/a7cbf7f7-e8ef-4429-ae27-bbc2913ce6eb/linked_in_profile",
  },
  {
    title: "Node.js",
    organisation: "LinkedIn Learning",
    skills: "Node.js, npm, file handling",
    date: "Jan 2024",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "jQuery Essential Training",
    organisation: "LinkedIn Learning",
    skills: "jQuery, event handling, AJAX",
    date: "Jan 2024",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "JavaScript for Beginners",
    organisation: "LinkedIn Learning",
    skills: "JavaScript fundamentals, loops, and DOM scripting",
    date: "Dec 2023",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "Introduction to Artificial Intelligence",
    organisation: "LinkedIn Learning",
    skills: "AI fundamentals, machine learning, natural language processing",
    date: "Dec 2023",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "Web Design and Development",
    organisation: "LinkedIn Learning",
    skills: "HTML, CSS, JavaScript, UI/UX principles",
    date: "Dec 2023",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "HTML for Programmers",
    organisation: "LinkedIn Learning",
    skills: "HTML, Web development, GitHub Codespaces",
    date: "Nov 2023",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
  {
    title: "Python for Beginners",
    organisation: "University of Moratuwa",
    skills: "Python, Object-Oriented Programming (OOP) principles",
    date: "Nov 2023",
    link: "https://www.linkedin.com/in/yoonus-ajward-461064239/details/certifications/",
  },
];

const Certificate = () => {
  return (
    <section id="certificates" className="certificate-section">
      <div className="certificate-header-container">
        <div className="certificate-divider"></div>
        <h2 className="certificate-header">Certifications</h2>
        <div className="certificate-divider"></div>
      </div>
      <p className="certificate-description">
        Below are some of the certifications I have completed to enhance my
        skills and knowledge in technology.
      </p>
      <div className="certificate-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-ribbon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-organisation">{cert.organisation}</p>
            <p className="certificate-skills">
              <strong>Skills Covered:</strong> {cert.skills}
            </p>
            <p className="certificate-date">
              <strong>Date:</strong> {cert.date}
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
