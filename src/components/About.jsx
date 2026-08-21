import React, { useState } from 'react';
import { Award, Compass, Heart } from 'lucide-react';
import aboutImg from '../assets/about-celebration.jpg';

export default function About() {
  const [showStory, setShowStory] = useState(false);

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
      {/* Intro Sub-section */}
      <div className="container" style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <div className="intro-sec" style={{ padding: 'var(--spacing-3xl) var(--spacing-xl)', borderRadius: 'var(--radius-lg)' }}>
          <div className="intro-content">
            <span className="eyebrow">Welcome to APK Celebrations</span>
            <h2 className="section-title" style={{ fontSize: 'var(--fs-4xl)', marginBottom: 'var(--spacing-md)' }}>
              Your Celebration, Our Creation
            </h2>
            <div className="gold-divider">
              <Compass size={16} />
            </div>
            <p className="intro-text">
              At APK Celebrations, we transform ordinary occasions into extraordinary experiences. 
              From intimate birthdays and private parties to grand themed celebrations and complete 
              event arrangements, we take care of all the details so you can truly live in the moment.
            </p>
            <button 
              className="btn btn-dark"
              onClick={() => setShowStory(!showStory)}
            >
              {showStory ? 'Hide Our Story' : 'Discover Our Story'}
            </button>

            {/* Expandable story details with micro-animation */}
            <div 
              style={{ 
                maxHeight: showStory ? '1000px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.6s cubic-bezier(0, 1, 0, 1)',
                marginTop: showStory ? 'var(--spacing-xl)' : '0',
                textAlign: 'left'
              }}
            >
              <div style={{ padding: 'var(--spacing-md) 0', borderTop: '1px solid rgba(183, 163, 106, 0.2)' }}>
                <p style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--fs-base)' }}>
                  Our journey started with a simple belief: every event should tell a unique story. We believe in meticulous planning, hand-crafted decor pieces, and matching the right energy to the right crowd. Whether it is sourcing the exact shade of metallic sage green balloons, coordinating back-to-back performances, or serving a gourmet meal hot to the table, our team has built its reputation on flawless execution.
                </p>
                <p style={{ fontSize: 'var(--fs-base)' }}>
                  Over the last few years, we have grown from managing small birthdays into planning weddings, corporate milestones, and luxury theme parties across the region. We are incredibly proud of our crew—designers, sound techs, emcees, and photographers—who treat every client's celebration as if it were their own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main About Details Sub-section */}
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
          
          {/* Image composition with Gold border */}
          <div style={{ position: 'relative', padding: '10px' }}>
            <img 
              src={aboutImg} 
              alt="APK Celebrations Team Event Design" 
              style={{ 
                width: '100%', 
                height: '420px', 
                objectFit: 'cover', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid var(--accent-color)',
                boxShadow: 'var(--shadow-md)' 
              }}
            />
            <div 
              style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-10px', 
                backgroundColor: 'var(--primary-color)', 
                color: 'var(--white)', 
                padding: 'var(--spacing-md) var(--spacing-lg)', 
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}
            >
              <Heart size={20} className="floating" style={{ color: 'var(--accent-color)' }} />
              <div>
                <div style={{ fontSize: 'var(--fs-lg)', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>100% Client</div>
                <div style={{ fontSize: 'var(--fs-xs)', textTransform: 'uppercase', letterSpacing: '1px' }}>Happiness Rate</div>
              </div>
            </div>
          </div>

          {/* Description & Value Props */}
          <div>
            <span className="eyebrow" style={{ alignSelf: 'flex-start' }}>About APK Celebrations</span>
            <h3 style={{ fontSize: 'var(--fs-3xl)', color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>
              Your Vision. Our Creativity.
            </h3>
            <p style={{ marginBottom: 'var(--spacing-lg)', fontSize: 'var(--fs-base)' }}>
              APK Celebrations is a premier party planning and event organizing startup focused on creating beautiful, personalized and memorable celebrations. From stunning decor and interactive entertainment to professional photography, catering and themed atmospheres, we aim to make every single event unique, elegant, and entirely stress-free.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--fs-base)', color: 'var(--primary-color)', fontWeight: '600' }}>Tailored Artistry</h4>
                  <p style={{ fontSize: 'var(--fs-sm)' }}>We design everything based on your specific ideas, theme colors, and venue layouts.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                  <Compass size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--fs-base)', color: 'var(--primary-color)', fontWeight: '600' }}>All-In-One Coordination</h4>
                  <p style={{ fontSize: 'var(--fs-sm)' }}>No need to deal with dozens of vendors. We sync catering, photography, hostesses, and DJs ourselves.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
