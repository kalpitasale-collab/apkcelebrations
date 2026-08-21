import React from 'react';
import { Check, Flame } from 'lucide-react';
import { PACKAGES_DATA } from '../data/packages';

export default function Packages({ onSelectPackage }) {
  const handleEnquire = (packageName) => {
    // Fire callback if provided
    if (onSelectPackage) {
      onSelectPackage(packageName);
    }
    
    // Smooth scroll to booking
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      window.scrollTo({
        top: bookingEl.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="packages" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">Celebrate Your Way</span>
          <h2 className="section-title">Choose Your Celebration</h2>
          <p className="section-description">
            Explore our curated event packages or contact us to design a custom luxury experience.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="packages-grid">
          {PACKAGES_DATA.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
            >
              {/* Badge for featured item */}
              {pkg.featured && pkg.badge && (
                <div className="package-badge">
                  <Flame size={12} style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline' }} />
                  {pkg.badge}
                </div>
              )}

              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-desc">{pkg.description}</p>
              
              <div className="gold-divider" style={{ width: '60%', margin: '0 auto var(--spacing-lg) auto' }}></div>

              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="package-feature-item">
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handleEnquire(pkg.name)}
              >
                {pkg.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div style={{ 
          marginTop: 'var(--spacing-2xl)', 
          textAlign: 'center', 
          fontSize: 'var(--fs-xs)', 
          fontStyle: 'italic', 
          color: 'var(--text-muted)' 
        }}>
          * Prices are tailored dynamically based on location, guest count, and customized styling options. 
          Contact our team to get a detailed personalized quote.
        </div>

      </div>
    </section>
  );
}
