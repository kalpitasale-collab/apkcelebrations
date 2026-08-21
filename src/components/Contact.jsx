import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants/config';

export default function Contact() {
  const whatsappUrl = `https://wa.me/91${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.defaultMessage)}`;

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">We'd Love To Hear From You</h2>
          <p className="section-description">
            Let's discuss details and plan an extraordinary experience for your guests.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left: Contact Info Cards */}
          <div className="contact-card">

            {/* Phone numbers */}
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="contact-info-title">Call Us</h3>
                <div className="contact-phones">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.value}`} className="contact-info-text" style={{ display: 'block', fontWeight: '500' }}>
                      {phone.display} {idx === 0 && <span style={{ fontSize: '10px', color: 'var(--accent-color)' }}>(Primary)</span>}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="contact-info-title">Email Us</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="contact-info-text" style={{ fontWeight: '500' }}>
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item" style={{ marginBottom: 0 }}>
              <div className="contact-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="contact-info-title">Our Location</h3>
                <p className="contact-info-text">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

          </div>

          {/* Right: Quick CTA Buttons */}
          <div className="contact-btn-group">
            <h3 style={{ fontSize: 'var(--fs-xl)', color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-heading)' }}>
              Direct Quick Channels
            </h3>
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
              Choose your preferred channel below. Our team typically responds within 30 minutes during standard business hours.
            </p>



            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact-action-btn"
              style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
            >
              <MessageSquare size={14} style={{ marginRight: '6px' }} /> WhatsApp Us
            </a>

            {/* Email mailto */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="btn btn-secondary contact-action-btn"
            >
              <Mail size={14} style={{ marginRight: '6px' }} /> Email Us Directly
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
