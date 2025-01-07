import React from "react";
import "./about.css";
import aboutImage from "../../assets/about-image.png";

const About = () => {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        <div className="aboutText">
          <h2 className="aboutHeading">Who I am?</h2>
          <p className="aboutDescription">
            My name is Yoonus Ajward. I am a professional and enthusiastic
            programmer passionate about software engineering and web
            development. I am a quick learner with a self-driven attitude and
            love to explore new technologies. My core expertise lies in full
            stack web and mobile application development, with a focus on
            creating impactful solutions. I am always eager to contribute to
            projects that align with my skills and interests.
          </p>
        </div>
        <div className="aboutImageContainer">
          <img src={aboutImage} alt="Yoonus Ajward" className="aboutImage" />
        </div>
      </div>
    </section>
  );
};

export default About;
