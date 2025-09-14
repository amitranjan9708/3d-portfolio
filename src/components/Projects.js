import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform 3D",
    description: "A revolutionary 3D e-commerce platform with immersive product visualization, AR try-on features, and real-time inventory management. Built for a Fortune 500 retail company.",
    technologies: ["React", "Three.js", "Node.js", "MongoDB", "AWS", "WebXR"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    featured: true,
    results: "450% increase in user engagement, 280% boost in conversion rates"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics dashboard with AI-driven insights and predictive modeling. Features interactive 3D data visualizations and automated reporting for enterprise clients.",
    technologies: ["React", "D3.js", "Python", "TensorFlow", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    liveUrl: "#",
    githubUrl: "#",
    category: "Data Science",
    featured: true,
    results: "Reduced data analysis time by 75%, serving 10M+ daily requests"
  },
  {
    id: 3,
    title: "Virtual Event Platform",
    description: "Immersive 3D virtual event platform supporting up to 10,000 concurrent users. Features spatial audio, interactive booths, and real-time networking capabilities.",
    technologies: ["React", "Three.js", "WebRTC", "Socket.io", "Redis", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
    liveUrl: "#",
    githubUrl: "#",
    category: "3D Web",
    featured: false,
    results: "Hosted 500+ events, 2M+ total attendees"
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description: "HIPAA-compliant healthcare platform with patient portals, telemedicine integration, and AI-assisted diagnosis. Serving multiple hospitals and clinics.",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Microservices"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    liveUrl: "#",
    githubUrl: "#",
    category: "Healthcare",
    featured: false,
    results: "Improved patient satisfaction by 65%, reduced wait times by 40%"
  },
  {
    id: 5,
    title: "Cryptocurrency Trading Bot",
    description: "Advanced algorithmic trading bot with machine learning capabilities. Features real-time market analysis, risk management, and portfolio optimization.",
    technologies: ["Python", "TensorFlow", "PostgreSQL", "Redis", "Docker", "AWS Lambda"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center",
    liveUrl: "#",
    githubUrl: "#",
    category: "FinTech",
    featured: false,
    results: "Generated 180% ROI, processed $50M+ in trades"
  },
  {
    id: 6,
    title: "Smart City IoT Dashboard",
    description: "IoT-powered smart city management system with real-time monitoring of traffic, air quality, energy consumption, and emergency services coordination.",
    technologies: ["React", "Node.js", "InfluxDB", "MQTT", "Three.js", "Grafana"],
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop&crop=center",
    liveUrl: "#",
    githubUrl: "#",
    category: "IoT",
    featured: false,
    results: "Monitoring 1M+ IoT devices, 30% reduction in energy costs"
  }
];

const categories = ["All", "Full Stack", "3D Web", "Data Science", "Healthcare", "FinTech", "IoT"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="projects section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2>Featured Projects</h2>
          <p>Showcasing innovative solutions that drive real business results</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="project-filters"
        >
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="btn btn-sm">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="btn btn-outline btn-sm">
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-results">
                  <strong>Results:</strong> {project.results}
                </div>

                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <p>Ready to start your next project?</p>
          <a href="#contact" className="btn">
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
