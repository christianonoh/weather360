import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedin, FaAngellist, FaEnvelope, FaSlack,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-text">
        Developed by
        {' '}
        <b>Christian Onoh</b>
      </span>
      <div className="footer-icons">
        <a href="https://github.com/christianonoh/weather360" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://twitter.com/OnohChristian" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/christianonoh/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://wellfound.com/u/christian-onoh" target="_blank" rel="noopener noreferrer">
          <FaAngellist className="footer-icon" />
        </a>
        <a href="mailto:chibyk5000@gmail.com">
          <FaEnvelope className="footer-icon" />
        </a>
        <a href="[Your Slack Workspace Link]" target="_blank" rel="noopener noreferrer">
          <FaSlack className="footer-icon" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
