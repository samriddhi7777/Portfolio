// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="contact-tag">📬 Get In Touch</span>
          <h2 className="contact-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Let's discuss potential opportunities, collaborations, or just have a chat about technology.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column - Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info with Working Links */}
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title">Contact Information</h3>

            <div className="contact-info-items">
              {/* Phone - Static */}
              <div className="contact-info-item">
                <span className="info-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91-7067451117</p>
                </div>
              </div>

              {/* Email - mailto link */}
              <a
                href="mailto:samriddhithakur7777@gmail.com"
                className="contact-info-item link-item"
              >
                <span className="info-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>samriddhithakur7777@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn - opens in new tab */}
              <a
                href="https://www.linkedin.com/in/samriddhi-thakur-6303a5282/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item link-item"
              >
                <span className="info-icon">🔗</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/samriddhi-thakur</p>
                </div>
              </a>

              {/* GitHub - opens in new tab */}
              <a
                href="https://github.com/samriddhi7777"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item link-item"
              >
                <span className="info-icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/samriddhi7777</p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="contact-location">
              <h4>📍 Location</h4>
              <p>Bhopal, Madhya Pradesh, India</p>
              <p className="location-note">
                Available for remote work, internships, and collaboration opportunities.
                Open to discussing projects in web development, cloud computing, and AI/ML.
              </p>
            </div>

            {/* Quick Links */}
            <div className="quick-links">
              <h4>Quick Links</h4>
              <div className="quick-links-grid">
                <a href="#projects">View Portfolio</a>
                <a href="#about">Learn About Me</a>
                <a href="#skills">Technical Skills</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;