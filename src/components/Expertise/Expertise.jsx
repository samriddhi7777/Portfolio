// src/components/Expertise/Expertise.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Expertise.css';

const Expertise = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { 
      id: 1, 
      title: 'Languages', 
      icon: '💻', 
      desc: 'Java, Python, JavaScript, TypeScript, SQL, C++',
      details: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
      color: '#E11D48',
      gradient: 'linear-gradient(135deg, #E11D48, #FB7185)',
    },
    { 
      id: 2, 
      title: 'Web & Backend', 
      icon: '🌐', 
      desc: 'React, Next.js, Node.js, REST APIs, HTML, CSS',
      details: ['React', 'Next.js', 'Node.js', 'REST APIs', 'HTML', 'CSS'],
      color: '#FF6B35',
      gradient: 'linear-gradient(135deg, #FF6B35, #FFA07A)',
    },
    { 
      id: 3, 
      title: 'Machine Learning', 
      icon: '🤖', 
      desc: 'XGBoost, LightGBM, SHAP, NetworkX, Pandas, NumPy',
      details: ['XGBoost', 'LightGBM', 'SHAP', 'NetworkX', 'Pandas', 'NumPy', 'Scikit-learn'],
      color: '#00D4FF',
      gradient: 'linear-gradient(135deg, #00D4FF, #66E5FF)',
    },
    { 
      id: 4, 
      title: 'Databases', 
      icon: '🗄️', 
      desc: 'PostgreSQL, MongoDB, MySQL, Prisma ORM',
      details: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma ORM'],
      color: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7, #C084FC)',
    },
    { 
      id: 5, 
      title: 'Cloud & Tools', 
      icon: '☁️', 
      desc: 'AWS, Docker, Git, CI/CD, Vercel, Render, Postman',
      details: ['AWS', 'Docker', 'Git', 'CI/CD', 'Vercel', 'Render', 'Postman'],
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
    },
    { 
      id: 6, 
      title: 'Core CS', 
      icon: '📚', 
      desc: 'DSA, OOP, DBMS, OS, Computer Networks',
      details: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899, #F472B6)',
    },
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="expertise-container">
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="expertise-tag">⚡ My Tech Stack</span>
          <h2 className="expertise-title">
            <span className="highlight">Skills</span> & Expertise
          </h2>
          <p className="expertise-subtitle">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="expertise-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`expertise-card ${activeCard === card.id ? 'active' : ''}`}
              style={{
                '--card-color': card.color,
                '--card-gradient': card.gradient,
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-glow" style={{ background: card.gradient }} />
              
              <div className="card-header">
                <span className="card-icon">{card.icon}</span>
                <span className="card-number">0{card.id}</span>
              </div>
              
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
              
              <div className="card-details">
                {card.details.map((item) => (
                  <span key={item} className="card-detail-tag">
                    {item}
                  </span>
                ))}
              </div>
              
              <div className="card-arrow">→</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;