import React, { useRef, useState } from "react";
import "./contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hfl9cay", "template_1k172zf", form.current, {
        publicKey: "7qi5W6HigQoOexIn2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          form.current.reset();
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contactPage">
      <div className="contact-header">
        <div className="contact-divider"></div>
        <h2 className="contact-title">Contact</h2>
        <div className="contact-divider"></div>
      </div>
      <p className="contact-description">
        Please fill out the form below to discuss any work opportunities.
      </p>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
          required
        />
        <textarea
          name="message"
          className="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" value="Send" className="SubmitBtn">
          Submit
        </button>
      </form>
      {isSubmitted && (
        <p className="successMessage">Message sent successfully!</p>
      )}
      <div className="links">
        <a
          href="https://www.linkedin.com/in/yoonus-ajward-461064239/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link linkedin"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/yoonusajward"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link github"
        >
          <FaGithub size={30} />
        </a>
        <a href="mailto:yoonusajward27@gmail.com" className="social-link email">
          <FaEnvelope size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
