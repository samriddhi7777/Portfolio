// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">© 2026 Samriddhi Thakur. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/samriddhithakur" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/samriddhithakur" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://leetcode.com/samriddhithakur" target="_blank" rel="noopener noreferrer" className="footer-link">LeetCode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;