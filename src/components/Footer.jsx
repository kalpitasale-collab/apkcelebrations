import React from 'react';
import { Heart } from 'lucide-react';
import { CONTACT_INFO } from '../constants/config';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/91${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(CONTACT_INFO.whatsapp.defaultMessage)}`;

  const handleLinkClick = (e, targetId) => {
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
    <footer className="footer-sec">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Brand info */}
          <div>
            <img 
              src={logoImg} 
              alt="APK Celebrations Logo" 
              style={{ 
                height: '70px', 
                width: '70px', 
                borderRadius: '50%', 
                border: '1px solid var(--accent-color)',
                marginBottom: 'var(--spacing-md)',
                objectFit: 'contain'
              }} 
            />
            <h3 className="footer-brand-title">APK Celebrations</h3>
            <p className="footer-brand-tagline">Turning Moments Into Memories</p>
            <p style={{ fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,0.5)', maxWidth: '300px' }}>
              We plan it. We decorate it. We entertain. We create memories. Elegant, stress-free party designs since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
              </li>
              <li className="footer-link-item">
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a>
              </li>
              <li className="footer-link-item">
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
              </li>
              <li className="footer-link-item">
                <a href="#work" onClick={(e) => handleLinkClick(e, 'work')}>Our Work</a>
              </li>
              <li className="footer-link-item">
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Social connections */}
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-socials">
              {/* WhatsApp direct chat link */}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="Chat with us on WhatsApp"
                title="WhatsApp"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  fill="currentColor"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.936 9.936 0 0 0 4.877 1.28c5.508 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.18-2.92-7.062C17.195 3.003 14.684 2 12.012 2zm5.72 14.159c-.25.703-1.455 1.284-2.008 1.372-.475.076-.998.136-3.13-.746-2.73-1.127-4.476-3.896-4.61-4.08-.137-.181-1.113-1.48-1.113-2.822 0-1.343.702-2.003.953-2.275.25-.272.551-.34.739-.34.188 0 .376.002.538.01.17.008.397-.065.62.482.228.558.777 1.896.845 2.031.069.136.113.294.022.476-.09.182-.136.295-.272.453-.136.159-.286.353-.408.473-.136.136-.278.284-.12.558.159.272.703 1.157 1.507 1.872.1.09.2.182.3.268.736.657 1.315.86 1.633 1.01.32.148.51.125.7-.09.192-.227.828-.964 1.05-1.293.222-.33.443-.272.744-.159.302.113 1.916.907 2.247 1.072.33.165.55.244.63.38.08.136.08.79-.17 1.492z"/>
                </svg>
              </a>
            </div>
            <p style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,0.4)', marginTop: 'var(--spacing-md)' }}>
              Chat with us on WhatsApp to discuss your event details and get a quick custom quote.
            </p>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="footer-bottom">
          <p>© {currentYear} APK Celebrations. All Rights Reserved.</p>
          <p style={{ marginTop: '4px', fontSize: '10px', color: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            Designed with <Heart size={8} style={{ color: 'var(--accent-color)', fill: 'var(--accent-color)' }} /> for premium event management.
          </p>
        </div>

      </div>
    </footer>
  );
}
