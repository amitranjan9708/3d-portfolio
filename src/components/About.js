import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
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
      title: "Senior Full Stack Developer",
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>Building the Future of Web</h3>
            <p>
              With over 5 years of experience in full-stack development, I specialize in creating 
              cutting-edge web applications that combine functionality with stunning visual design. 
              My expertise spans from traditional web development to immersive 3D experiences using Three.js.
            </p>
            <p>
              I've had the privilege of working with clients from startups to Fortune 500 companies, 
              delivering solutions that not only meet requirements but exceed expectations. My approach 
              focuses on clean code, scalable architecture, and user-centric design.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community. I believe in continuous learning and 
              staying ahead of industry trends.
            </p>

            <div className="about-skills">
              <h4>Core Competencies</h4>
              <ul>
                <li>Full-Stack Web Development (React, Node.js, Python)</li>
                <li>3D Web Applications (Three.js, WebGL, WebXR)</li>
                <li>Cloud Architecture (AWS, Azure, GCP)</li>
                <li>Database Design (MongoDB, PostgreSQL, Redis)</li>
                <li>DevOps & CI/CD (Docker, Kubernetes, Jenkins)</li>
                <li>Mobile Development (React Native, Flutter)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-visual"
          >
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="achievement-card"
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <h5>{item.company}</h5>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
