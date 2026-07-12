// src/components/Certifications/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

// Import your certificate images
import marketingCert from '../../assets/certificates/marketing-management.jpg';
import supplyChainCert from '../../assets/certificates/supply-chain.jpg';
import iotCert from '../../assets/certificates/iot-security.jpg';
import aiCert from '../../assets/certificates/ai-ml.jpg';
import pythonCert from '../../assets/certificates/python-essentials.jpg';
import awsCert from '../../assets/certificates/aws-technical-essentials.jpg';

const Certifications = () => {
  const certs = [
    { 
      name: 'Marketing Management - II', 
      issuer: 'NPTEL', 
      year: '2026',
      image: marketingCert,
    },
    { 
      name: 'Supply Chain Digitization', 
      issuer: 'NPTEL', 
      year: '2026',
      image: supplyChainCert,
    },
    { 
      name: 'Industrial IoT Markets and Security', 
      issuer: 'Coursera', 
      year: '2024',
      image: iotCert,
    },
    { 
      name: 'Fundamentals of AI and ML', 
      issuer: 'Vityarthi', 
      year: '2024',
      image: aiCert,
    },
    { 
      name: 'Python Essentials', 
      issuer: 'Vityarthi', 
      year: '2024',
      image: pythonCert,
    },
    { 
      name: 'AWS Technical Essentials', 
      issuer: 'Amazon Web Services', 
      year: '2025',
      image: awsCert,
    },
  ];

  const openCertificate = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="certifications-tag">🎓 Credentials</span>
          <h2 className="certifications-title">
            My <span className="highlight">Certifications</span>
          </h2>
          <p className="certifications-subtitle">
            Professional certifications and courses I've completed
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => openCertificate(cert.image)}
            >
              <div className="cert-icon">🎓</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-year">{cert.year}</p>
              <span className="cert-view-hint">👁️ Click to view</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;