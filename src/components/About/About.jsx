// src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Badge Card */}
          <motion.div
            className="badge-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge-card">
              <div className="badge-content">
                <div className="badge-avatar">👩‍💻</div>
                <div>
                  <h3 className="badge-name">Samriddhi Thakur</h3>
                  <p className="badge-role">SDE Aspirant | Full Stack Developer</p>
                  <div className="badge-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>AWS</span>
                  </div>
                </div>
              </div>
              <div className="badge-string" />
              <div className="badge-clip" />
            </div>
          </motion.div>

          {/* About Text */}
          <div>
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I'm a Final-year Computer Science undergraduate specializing in <strong>E-Commerce Technology</strong> 
              at <strong>VIT Bhopal University</strong>, with hands-on experience building full-stack web applications 
              and machine learning systems. I have a strong foundation in <strong>Data Structures and Algorithms</strong>, 
              system design, and end-to-end software development.
            </p>
            <p className="about-text" style={{ marginTop: '1rem' }}>
              I'm passionate about building scalable, efficient solutions and currently seeking 
              <strong> Software Development Engineer (SDE) </strong> roles where I can make an impact.
            </p>
            <div className="about-stats">
              <div>
                <span className="stat-number">8.84</span>
                <p className="stat-label">CGPA</p>
              </div>
              <div>
                <span className="stat-number">10+</span>
                <p className="stat-label">Projects</p>
              </div>
              <div>
                <span className="stat-number">4+</span>
                <p className="stat-label">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120H360C240 120 120 120 60 120H0Z"
            fill="#0F0F0F"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;