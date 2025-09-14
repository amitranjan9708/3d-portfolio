import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React/Next.js", level: 95, color: "#61DAFB" },
      { name: "Vue.js/Nuxt.js", level: 90, color: "#4FC08D" },
      { name: "Three.js/WebGL", level: 88, color: "#000000" },
      { name: "TypeScript", level: 92, color: "#3178C6" },
      { name: "SCSS/Tailwind", level: 94, color: "#06B6D4" },
      { name: "WebXR/AR", level: 85, color: "#FF6B6B" }
    ]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js/Express", level: 93, color: "#339933" },
      { name: "Python/Django", level: 89, color: "#3776AB" },
      { name: "PHP/Laravel", level: 85, color: "#777BB4" },
      { name: "GraphQL/REST", level: 91, color: "#E10098" },
      { name: "Microservices", level: 87, color: "#FF6B35" },
      { name: "Socket.io/WebRTC", level: 88, color: "#010101" }
    ]
  },
  {
    title: "Database & Cloud",
    icon: "☁️",
    skills: [
      { name: "MongoDB", level: 92, color: "#47A248" },
      { name: "PostgreSQL", level: 90, color: "#336791" },
      { name: "Redis", level: 86, color: "#DC382D" },
      { name: "AWS/Azure", level: 88, color: "#FF9900" },
      { name: "Docker/K8s", level: 85, color: "#2496ED" },
      { name: "Firebase", level: 89, color: "#FFCA28" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 95, color: "#F05032" },
      { name: "Webpack/Vite", level: 90, color: "#8DD6F9" },
      { name: "Jest/Cypress", level: 87, color: "#C21325" },
      { name: "CI/CD", level: 89, color: "#4285F4" },
      { name: "Figma/Design", level: 85, color: "#F24E1E" },
      { name: "Agile/Scrum", level: 92, color: "#0052CC" }
    ]
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: "☁️"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2023",
    icon: "🌤️"
  },
  {
    title: "Meta React Advanced Developer",
    issuer: "Meta",
    year: "2022",
    icon: "⚛️"
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    year: "2022",
    icon: "🍃"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2>Skills & Expertise</h2>
          <p>Comprehensive technical skills backed by real-world experience</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="certifications-section"
        >
          <h3>Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="certification-card"
              >
                <div className="cert-icon">{cert.icon}</div>
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="skills-cta"
        >
          <div className="cta-content">
            <h3>Ready to bring your ideas to life?</h3>
            <p>Let's discuss how my skills can help your project succeed</p>
            <a href="#contact" className="btn">
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
