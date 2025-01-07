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

function Projects() {
  const projects = [
    {
      name: "Personal Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects, skills, and experience. Built using React and CSS, it features dynamic sections, a projects gallery, and seamless navigation. It provides a platform to highlight my professional journey and accomplishments.",
      tools: ["React", "CSS", "React Router", "EmailJS", "JavaScript"],
      github: "https://github.com/yoonusajward/Personal-Portfolio-Website",
      demo: "https://yoonusajward.github.io/Personal-Portfolio-Website/",
      image: portfolioImage,
    },
    {
      name: "TripTuner - AI Travel Plan Mobile Application",
      description:
        "TripTuner is a mobile application designed to help users plan travel itineraries using a trained GPT model. The app incorporates a user-friendly interface to enhance the overall experience.",
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
        "Alfie Pet Supplies is a pet-oriented web app that allows users to browse and order pet products. With a responsive UI, the platform integrates external APIs for features like a cart system, pet adoption, health tips, and dynamic content from the Cat Fact API, ensuring a smooth and interactive user experience.",
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
        "A fully functional e-commerce site built using React. Features include product listings, a shopping cart, and a responsive checkout process for seamless shopping.",
      tools: ["React", "CSS", "HTML", "React Router", "JavaScript"],
      github: "https://github.com/yoonusajward/ecommerce-react-project",
      demo: "https://yoonusajward.github.io/ecommerce-react-project/",
      image: ecommerceImage,
    },
    {
      name: "BlackBerry CRUD Application",
      description:
        "A web application built with the MEVN stack to manage business data. It offers full CRUD functionality for customers, employees, products, and sales, with a centralised dashboard for key metrics, enabling data-driven insights and smooth navigation.",
      tools: ["MongoDB", "Express.js", "Vue.js", "Node.js", "CSS", "Axios"],
      github: "https://github.com/yoonusajward/BlackBerry-CRUD-Application",
      image: blackBerryImage,
    },
    {
      name: "Task Manager Application",
      description:
        "A full-stack task management app built with React, Node.js (Express), and MySQL. It supports adding, editing, deleting, and filtering tasks, with task statuses for better organisation and efficient management.",
      tools: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      github: "https://github.com/yoonusajward/task-manager-app",
      image: taskManagerImage,
    },
    {
      name: "Task Tracker Application",
      description:
        "A web-based task management application built with Laravel, featuring user authentication, real-time updates using Livewire, and a modern UI powered by Filament. It enables users to manage tasks efficiently with full CRUD functionality.",
      tools: ["Laravel", "PHP", "Blade", "Livewire", "Filament", "MySQL"],
      github: "https://github.com/yoonusajward/Task-Tracker-Laravel",
      image: taskTrackerImage,
    },
    {
      name: "Journey Diaries - Travel Blog",
      description:
        "Journey Diaries is a responsive travel blog offering interactive content for enthusiasts. Features include real-time weather updates, travel videos, secure payments, and a custom search engine, combining an engaging front-end with robust API-driven back-end functionality.",
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
    <div id="projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-divider"></div>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-divider"></div>
      </div>

      <p className="projects-description">
        I’m passionate about creating software that’s not only functional but
        also meticulously crafted. My dedication to detail ensures that every
        project I work on meets the highest standards. I’m excited to use my
        skills and experience to help businesses achieve their goals and build a
        powerful online presence.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub size={30} />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <GrView size={25} />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
