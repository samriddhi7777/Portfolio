// src/components/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TrueComp — Salary Transparency Platform',
      description: 'Full-stack salary transparency platform with a normalization engine mapping company-specific bands to a unified L1–L7 scale. Built with Next.js 14, TypeScript, PostgreSQL, and Prisma.',
      tech: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth v5', 'Zod'],
      icon: '💰',
      link: 'https://truecomp.vercel.app',
      github: 'https://github.com/samriddhi7777/truecomp',
    },
    {
      title: 'Smart Return Fraud Detector',
      description: 'ML pipeline detecting six e-commerce return fraud patterns using ensembled XGBoost/LightGBM models with SHAP explainability and NetworkX graph analysis for fraud ring detection.',
      tech: ['Python', 'XGBoost', 'LightGBM', 'SHAP', 'NetworkX', 'FastAPI', 'Streamlit'],
      icon: '🛡️',
      link: 'https://smart-return-fraud-detector-ezglsfjtxlztdjvucqjyxe.streamlit.app',
      github: 'https://github.com/samriddhi7777/smart-return-fraud-detector',
    },
    {
      title: 'Video Portfolio',
      description: 'Interactive video portfolio with AI avatar introduction, built with React, Vite, and WebRTC for real-time recording capabilities.',
      tech: ['React', 'Vite', 'WebRTC'],
      icon: '🎥',
      link: 'https://your-portfolio-link.com', // Replace with your actual link
      github: 'https://github.com/samriddhi7777/video-portfolio',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="projects-tag">🚀 My Work</span>
          <h2 className="projects-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Some of my recent work and contributions
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.link} 
                  className="project-link live-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  🌐 Live Demo →
                </a>
                
                {project.github && (
                  <a 
                    href={project.github} 
                    className="project-link github-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    📂 GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;