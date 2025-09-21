import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      const heroVisual = document.querySelector('.hero-visual');
      if (heroVisual) {
        const rect = heroVisual.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', updateMousePosition);
      return () => heroSection.removeEventListener('mousemove', updateMousePosition);
    }
  }, []);

  const calculateElementPosition = (baseX, baseY, index) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - baseX, 2) + Math.pow(mousePosition.y - baseY, 2)
    );
    const maxDistance = 150;
    const influence = Math.max(0, (maxDistance - distance) / maxDistance);
    
    const angle = Math.atan2(mousePosition.y - baseY, mousePosition.x - baseX);
    const pushDistance = influence * 30;
    
    return {
      x: -Math.cos(angle) * pushDistance,
      y: -Math.sin(angle) * pushDistance
    };
  };

  return (
    <section id="hero" className="hero section">
      <div className="hero-content section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <h1>
            Full Stack Developer &<br />
            <span className="gradient-text">3D Specialist</span>
          </h1>
           
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            I create stunning web applications with modern technologies like React, Node.js, 
            and Three.js. Specialized in 3D web experiences, full-stack development, 
            and delivering high-quality solutions for global clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-stats"
          >
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-actions"
          >
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-scroll"
          >
            <div className="scroll-indicator">
              <span>Scroll to explore</span>
              <div className="scroll-arrow"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-visual"
        >
          <div className="floating-elements">
            {[
              { name: 'React', class: 'element-1', baseX: 60, baseY: 60 },
              { name: 'Node.js', class: 'element-2', baseX: 300, baseY: 80 },
              { name: 'Three.js', class: 'element-3', baseX: 80, baseY: 180 },
              { name: 'MongoDB', class: 'element-4', baseX: 320, baseY: 200 },
              { name: 'AWS', class: 'element-5', baseX: 100, baseY: 300 },
              { name: 'TypeScript', class: 'element-6', baseX: 280, baseY: 340 },
              { name: 'Python', class: 'element-7', baseX: 180, baseY: 100 },
              { name: 'Java', class: 'element-8', baseX: 250, baseY: 140 },
              { name: 'C++', class: 'element-9', baseX: 160, baseY: 220 },
              { name: 'C#', class: 'element-10', baseX: 220, baseY: 260 },
              { name: 'PHP', class: 'element-11', baseX: 140, baseY: 160 },
              { name: 'SQL', class: 'element-12', baseX: 200, baseY: 320 },
              { name: 'NoSQL', class: 'element-13', baseX: 340, baseY: 160 },
              { name: 'React Native', class: 'element-14', baseX: 240, baseY: 40 }
            ].map((tech, index) => {
              const offset = calculateElementPosition(tech.baseX, tech.baseY, index);
              return (
                <motion.div
                  key={tech.name}
                  className={`element ${tech.class}`}
                  style={{
                    left: `${tech.baseX}px`,
                    top: `${tech.baseY}px`
                  }}
                  animate={{
                    x: offset.x,
                    y: offset.y
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                  }}
                >
                  {tech.name}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
