import React from 'react';
import { SERVICES_DATA } from '../data/services';
import * as Icons from 'lucide-react';

export default function Services() {
  // Safe helper to render icons dynamically
  const renderIcon = (iconName) => {
    // If the icon is "Balloon", Lucide may or may not support it depending on version.
    // We fall back to "Gift" if "Balloon" doesn't exist, which fits balloons nicely.
    let IconComponent = Icons[iconName];
    if (!IconComponent && iconName === 'Balloon') {
      IconComponent = Icons['Gift'];
    }
    // Final fallback to Sparkles
    if (!IconComponent) {
      IconComponent = Icons['Sparkles'];
    }
    return <IconComponent size={32} strokeWidth={1.5} />;
  };

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Everything you need to make your celebration memorable, creative and completely your own.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {renderIcon(service.iconName)}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div style={{ 
                marginTop: 'var(--spacing-md)', 
                fontSize: '0.75rem', 
                color: 'var(--accent-color)', 
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Learn More
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
