import React from 'react';
import { Sparkles } from 'lucide-react';
import whyImage from '../assets/why-choose-us.jpg';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Creative & Customized",
      description: "Every celebration is designed according to your ideas, preferences and theme."
    },
    {
      title: "Complete Event Solutions",
      description: "Décor, entertainment, photography and catering, all brought together seamlessly for your event."
    },
    {
      title: "Attention To Detail",
      description: "We focus on the little details—from themed table favors to color harmony—that make your event truly special."
    },
    {
      title: "Memorable Experiences",
      description: "Our ultimate goal is to create celebrations that you and your guests will remember for years to come."
    }
  ];

  return (
    <section className="section why-sec">
      <div className="container why-grid">
        
        {/* Features Content */}
        <div>
          <span className="eyebrow" style={{ color: 'var(--accent-color)' }}>Why APK Celebrations</span>
          <h2 className="section-title">We Create More Than Events</h2>
          <div className="gold-divider" style={{ justifyContent: 'flex-start', margin: 'var(--spacing-md) 0' }}>
            <Sparkles size={16} />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-2xl)', fontSize: 'var(--fs-base)' }}>
            Planning a celebration shouldn't be stressful. We combine professional management with premium aesthetics to deliver a cohesive experience from start to finish.
          </p>

          <div className="why-features">
            {features.map((feature, idx) => (
              <div key={idx} className="why-card">
                <h3 className="why-card-title">{feature.title}</h3>
                <p className="why-card-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Panel */}
        <div className="why-visual-panel">
          <img 
            src={whyImage} 
            alt="APK Celebrations Premium Birthday Event Setup" 
            className="why-image"
          />
        </div>

      </div>
    </section>
  );
}
