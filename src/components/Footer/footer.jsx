import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <p className="footer-text">
          Copyright &copy; {new Date().getFullYear()} Yoonus Ajward. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
