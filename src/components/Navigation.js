import React, { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span>&lt;</span>
          <span>AlphaTech-Wave</span>
          <span>/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
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

        {/* Desktop CTA */}
        <div className="nav-cta desktop-cta">
          <a href="#contact" className="btn btn-outline">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
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
        
        <div className="mobile-cta">
          <a href="#contact" className="btn btn-outline">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

