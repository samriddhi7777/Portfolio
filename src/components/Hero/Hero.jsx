// src/components/Hero/Hero.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Import your video
import heroVideo from '../../assets/intro-video.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play the video muted first (most browsers allow this)
    const playVideo = async () => {
      try {
        video.muted = true;
        video.volume = 1;
        await video.play();
        setIsPlaying(true);
        setIsMuted(true);
        console.log('Video playing muted. Click to unmute.');
      } catch (error) {
        console.log('Autoplay was blocked completely.');
        setIsPlaying(false);
      }
    };

    playVideo();

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  // Handle click anywhere on the hero to toggle play/pause AND unmute
  const handlePageClick = () => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    // Mark that user has interacted
    setHasUserInteracted(true);
    
    if (video.paused) {
      // If paused, play it with sound
      video.muted = false;
      video.volume = 1;
      video.play();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      // If playing, pause it
      video.pause();
      setIsPlaying(false);
    }
  };

  // Toggle mute with the button
  const toggleMute = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Mark that user has interacted
      setHasUserInteracted(true);
      
      // If video is paused, play it first
      if (video.paused) {
        video.muted = false;
        video.volume = 1;
        video.play();
        setIsPlaying(true);
        setIsMuted(false);
        return;
      }
      
      // Toggle mute
      video.muted = !isMuted;
      setIsMuted(!isMuted);
      
      // If unmuted, ensure volume is up
      if (!isMuted) {
        video.volume = 1;
      }
    }
  };

  return (
    <section 
      id="home" 
      className="hero"
      onClick={handlePageClick}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video"
        playsInline
        muted={isMuted}
        loop={false}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I'm <span className="hero-highlight">Samriddhi</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Full Stack Developer | AI/ML Enthusiast
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Click Hint - shows when video is muted */}
      {isPlaying && isMuted && !hasUserInteracted && (
        <div className="click-hint">
          <span>🔊 Click anywhere to unmute</span>
        </div>
      )}

      {/* Mute/Unmute Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMute();
        }}
        className="mute-btn"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </section>
  );
};

export default Hero;