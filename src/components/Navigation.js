import React, { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span>&lt;</span>
          <span>AlphaTech-Wave</span>
          <span>/&gt;</span>
        </div>

        <ul className="nav-menu">
          <li>
            <button
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-outline">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
