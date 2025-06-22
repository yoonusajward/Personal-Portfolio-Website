import React from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import alfiePetImage from "../../assets/alfie-pet-supplies-homepage.png";
import journeyDiariesImage from "../../assets/journey-diaries-homepage.png";
import blackBerryImage from "../../assets/blackberry-homepage.png";
import tripTunerImage from "../../assets/triptuner-interfaces.png";
import taskManagerImage from "../../assets/task-manager-homepage.png";
import ecommerceImage from "../../assets/ecommerce-homepage.png";
import taskTrackerImage from "../../assets/task-tracker-homepage.png";
import portfolioImage from "../../assets/portfolio-homepage.png";
import yoAppImage from "../../assets/yo-app-homepage.png";

function Projects() {
  const projects = [
    {
      name: "Yo Social Media App",
      description:
        "A full-stack social media platform enabling user registration, real-time posting, likes, comments, and profile management. Built with a responsive design for both web and mobile, it delivers a smooth and engaging user experience.",
      tools: [
        "Next.js", "React", "TypeScript", "Firestore", "Firebase", "Tailwind CSS", "Redux Toolkit", "Material UI"
      ],
      demo: "https://yo-app-social-media-app.vercel.app/",
      image: yoAppImage,
    },
    {
      name: "Personal Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects, skills, and experience. Built using React and CSS, it features dynamic sections, a projects gallery, and seamless navigation.",
      tools: ["React", "CSS", "React Router", "EmailJS", "JavaScript"],
      github: "https://github.com/yoonusajward/Personal-Portfolio-Website",
      demo: "https://yoonusajward.github.io/Personal-Portfolio-Website/",
      image: portfolioImage,
    },
    {
      name: "TripTuner - AI Travel Plan Mobile Application",
      description:
        "TripTuner is a mobile app designed to help users plan travel itineraries using a trained GPT model. The app features a user-friendly interface for an enhanced experience.",
      tools: [
        "Kotlin",
        "Python",
        "Firebase",
        "XML Layouts",
        "Android Studio",
        "Google Colab",
        "Hugging Face Transformers",
        "GPT-2 Model",
      ],
      github:
        "https://github.com/yoonusajward/TripTuner-TravelPlan-MobileAppKotlin",
      image: tripTunerImage,
    },
    {
      name: "Alfie Pet Supplies - Pet-Oriented Web App",
      description:
        "Alfie Pet Supplies allows users to browse and order pet products with a responsive UI. It integrates external APIs for a cart system, pet adoption, health tips, and dynamic content from the Cat Fact API.",
      tools: [
        "Vue.js",
        "Tailwind CSS",
        "JavaScript",
        "Firebase",
        "REST API",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/yoonusajward/Alfie-Pet-Supplies",
      demo: "https://alfiepetsupplies-01.web.app/",
      image: alfiePetImage,
    },
    {
      name: "E-commerce Fashion Store",
      description:
        "A fully functional e-commerce site built using React. Features include product listings, a shopping cart, and a responsive checkout process.",
      tools: ["React", "CSS", "HTML", "React Router", "JavaScript"],
      github: "https://github.com/yoonusajward/ecommerce-react-project",
      demo: "https://yoonusajward.github.io/ecommerce-react-project/",
      image: ecommerceImage,
    },
    {
      name: "BlackBerry CRUD Application",
      description:
        "A web application built with the MEVN stack to manage business data. Includes full CRUD operations, a dashboard, and role-based views.",
      tools: ["MongoDB", "Express.js", "Vue.js", "Node.js", "CSS", "Axios"],
      github: "https://github.com/yoonusajward/BlackBerry-CRUD-Application",
      image: blackBerryImage,
    },
    {
      name: "Task Manager Application",
      description:
        "A full-stack task management app built with React, Node.js (Express), and MySQL. It supports CRUD operations with filtering and status updates.",
      tools: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      github: "https://github.com/yoonusajward/task-manager-app",
      image: taskManagerImage,
    },
    {
      name: "Task Tracker Application",
      description:
        "A web-based task manager built with Laravel, including Livewire, Filament UI, and MySQL integration. Supports real-time updates and full CRUD features.",
      tools: ["Laravel", "PHP", "Blade", "Livewire", "Filament", "MySQL"],
      github: "https://github.com/yoonusajward/Task-Tracker-Laravel",
      image: taskTrackerImage,
    },
    {
      name: "Journey Diaries - Travel Blog",
      description:
        "A responsive travel blog with real-time weather updates, embedded travel videos, secure payment options, and a custom search experience.",
      tools: [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Bootstrap",
        "MySQL",
        "REST API",
      ],
      github: "https://github.com/yoonusajward/Journey-Diaries",
      image: journeyDiariesImage,
    },
  ];

  return (
    <section id="projects" className="projects-section" aria-label="Projects">
      <div className="projects-header">
        <div className="projects-divider"></div>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-divider"></div>
      </div>

      <p className="projects-description">
        I’m passionate about creating software that is not only functional but
        also meticulously crafted. My dedication to detail ensures every
        project meets the highest standards. I look forward to applying my
        skills and experience to help businesses achieve their goals and build
        a strong online presence.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className="tool">
                  {tool}
                </span>
              ))}
            </div>
            <div className="project-card-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`GitHub repository for ${project.name}`}
                >
                  <FaGithub size={30} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                  aria-label={`Live demo of ${project.name}`}
                >
                  <GrView size={25} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
