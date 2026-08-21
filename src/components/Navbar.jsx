import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on scroll (excluding packages)
      const sections = ['home', 'about', 'services', 'work', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - (isScrolled ? 70 : 80),
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Our Work', id: 'work' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo Image & Text */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')} 
          className="nav-logo"
        >
          <img 
            src={logoImg} 
            alt="APK Celebrations Logo" 
            className="nav-logo-img"
          />
          <div className="nav-logo-text-wrapper">
            <span className="nav-logo-text">
              APK <span style={{ color: 'var(--accent-color)' }}>Celebrations</span>
            </span>
            <span className="nav-logo-sub">Party Planners &amp; Event Organisers</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Mobile CTA */}
          <li className="nav-cta-mobile" style={{ display: 'none' }}>
            <a
              href="#book"
              className="btn btn-primary"
              onClick={(e) => handleLinkClick(e, 'booking')}
            >
              Book Your Event
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <a
            href="#booking"
            className="btn btn-primary"
            onClick={(e) => handleLinkClick(e, 'booking')}
          >
            Book Your Event
          </a>
        </div>

        {/* Hamburger Trigger */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
}
