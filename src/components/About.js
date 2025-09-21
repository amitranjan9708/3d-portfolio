import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Custom hook to get device type reactively
function useDeviceType() {
  const [deviceType, setDeviceType] = useState(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return 'mobile';
      if (width <= 768) return 'tablet';
      return 'desktop';
    }
    return 'desktop'; // fallback for SSR or unknown
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 480) setDeviceType('mobile');
      else if (width <= 768) setDeviceType('tablet');
      else setDeviceType('desktop');
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}

export default function About() {
  const deviceType = useDeviceType();

  const achievements = [
    {
      icon: "🏆",
      title: "Top Rated Freelancer",
      description: "100% Job Success Score on Upwork with 5-star ratings"
    },
    {
      icon: "🌍",
      title: "Global Client Base",
      description: "Delivered projects across 15+ countries"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Average project completion 30% ahead of schedule"
    },
    {
      icon: "🔧",
      title: "Full Stack Expertise",
      description: "End-to-end development from concept to deployment"
    }
  ];

  const experience = [
    {
      year: "2024",
      title: "Senior Developer",
      company: "Allen Digital",
      description: "Specialized in 3D web applications and enterprise solutions"
    },
    {
      year: "2022-2023",
      title: "Software Developer",
      company: "WhiteHat Jr",
      description: "Led development of React-based applications for Fortune 500 clients"
    },
    {
      year: "2020-2022",
      title: "Full Stack Developer",
      company: "Digital Innovation Agency",
      description: "Built scalable web applications using modern JavaScript stack"
    },
    {
      year: "2019-2020",
      title: "Junior Developer",
      company: "freelancer during college",
      description: "Developed responsive web applications and gained foundational experience"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <h2>About Me</h2>
          <p>Passionate developer creating exceptional digital experiences</p>
        </motion.div>

        <div className="about-content">
          {/* ... other content unchanged ... */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="experience-section"
          >
            <h3>Professional Journey</h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <div className="timeline-content">
                    <h4>
                      {item.title}
                      {deviceType !== 'mobile' && <span> ({item.year})</span>}
                    </h4>
                    <h5>{item.company}</h5>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
