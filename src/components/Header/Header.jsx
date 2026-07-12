import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div>
            <h1>Your Name</h1>
            <span className="title">Full Stack Developer</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#recorder">Record</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;