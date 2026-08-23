import React from 'react';
import { Sparkles, CalendarRange } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-sec">
      {/* Cinematic Full-Screen Background Photo (Luxury balloon and event setup) */}
      <img 
        src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&auto=format&fit=crop&q=80" 
        alt="APK Celebrations Premium Event Setup" 
        className="hero-bg-image animate-zoom"
      />

      {/* Dark Side-Gradient Overlay Mask */}
      <div className="hero-overlay"></div>

      {/* Content Container */}
      <div className="hero-container">
        <div className="hero-content">
          
          {/* Eyebrow with decorative gold line */}
          <div className="hero-eyebrow animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span>APK Celebrations</span>
            <span className="hero-eyebrow-line"></span>
            <Sparkles size={12} style={{ color: 'var(--accent-color)' }} />
          </div>

          {/* Main Heading */}
          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Crafting Unforgettable<br />
            <span className="hero-title-italic">Celebrations</span>
          </h1>

          {/* Tagline / Brand Subtitle */}
          <p className="hero-tagline animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Party Planners &amp; Event Organisers
          </p>

          {/* Description Paragraph */}
          <p className="hero-description animate-fade-up" style={{ animationDelay: '0.4s' }}>
            From breath-taking custom balloon arches and customized themed backdrops to energetic DJ soundscapes and professional game hosts, we manage every detail to bring your celebration dream to life.
          </p>

          {/* Dual Action Buttons */}
          <div className="hero-buttons animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#booking" 
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, 'booking')}
            >
              <CalendarRange size={16} style={{ marginRight: '6px' }} />
              Book Your Event
            </a>
            <a 
              href="#services" 
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              Explore Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
