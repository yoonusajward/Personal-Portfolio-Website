import React from "react";
import "./hero.css";
import heroimage from "../../assets/hero-image.png";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="heroSection">
      <div className="heroContainer">
        <span className="heroHello">Hello,</span>
        <h1 className="heroTitle">
          I'm <span className="heroName">Yoonus</span> Ajward
        </h1>
        <h2 className="heroSubtitle">I'm a Software Engineer Intern</h2>
        <p className="heroDescription">
          A passionate software engineer with expertise in full stack web and
          mobile application development. I strive to create innovative and
          efficient solutions that make an impact.
        </p>
        <div className="iconRow">
          <a
            href="https://www.linkedin.com/in/yoonus-ajward-461064239/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yoonusajward"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:yoonusajward27@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="buttonRow">
          <a
            href={`${process.env.PUBLIC_URL}/Yoonus_Ajward_Software_Engineer_Intern_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="heroBtn"
          >
            <FaDownload className="icon" /> Get Resume
          </a>
          <Link to="contact" smooth duration={500}>
            <button className="heroBtn">
              <FaEnvelope className="icon" /> Contact Me
            </button>
          </Link>
        </div>
      </div>
      <img src={heroimage} alt="Hero" className="heroImage" />
    </section>
  );
};

export default Hero;
