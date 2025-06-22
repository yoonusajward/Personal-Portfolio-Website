import React from "react";
import "./about.css";
import aboutImage from "../../assets/about-image.png";

const About = () => {
  return (
    <section id="about" className="aboutSection" aria-label="About Me">
      <div className="aboutContainer">
        <div className="aboutText">
          <h2 className="aboutHeading">About Me</h2>
          <p className="aboutDescription">
            I'm <strong>Yoonus Ajward</strong>, a dedicated and enthusiastic software engineer with a strong foundation in full-stack web and mobile application development. I'm a self-motivated learner who thrives in dynamic environments and enjoys exploring emerging technologies. I focus on delivering high-quality, impactful digital solutions, and I'm always eager to contribute to innovative projects that align with my values and expertise.
          </p>
        </div>
        <div className="aboutImageContainer">
          <img
            src={aboutImage}
            alt="Yoonus Ajward - Software Engineer"
            className="aboutImage"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
