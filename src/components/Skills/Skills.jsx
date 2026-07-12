// src/components/Skills/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const proficiencies = [
    { name: 'Programming Languages (Java, C++, Python)', level: 90 },
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'Database Management (SQL, MongoDB)', level: 80 },
    { name: 'System Design', level: 75 },
    { name: 'Machine Learning', level: 70 },
    { name: 'React, Node.js', level: 85 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="skills-tag">📊 PROFICIENCY</span>
          <h2 className="skills-title">
            Proficiency <span className="highlight">Highlights</span>
          </h2>
          <p className="skills-subtitle">
            Key areas where I excel and continue to grow.
          </p>
        </motion.div>

        <div className="skills-grid">
          {proficiencies.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <motion.div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;