import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const NAVBAR_HEIGHT = 74;

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="footer-container-shell">
      <div className="content-row footer-grid-columns">
        
        {/* Brand Column */}
        <div className="footer-col-brand">
          <div className="nav-logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-symbol">N</div>
            <div className="logo-wordmark">
              <span className="brand-primary-text" style={{ color: '#ffffff' }}>NEXORA</span>
              <span className="brand-secondary-text">SOLUTIONS</span>
            </div>
          </div>
          <p className="footer-mission-statement">
            Production-grade software systems, cloud backend APIs, and executive business analytics engineered to solve complex operational challenges.
          </p>

          <div className="footer-social-row">
            <a href="https://wa.me/923073036015" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="WhatsApp" title="WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a href="https://instagram.com/saji_015" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram" title="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/sajjadali015" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="LinkedIn" title="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://github.com/sajjadali015" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="GitHub" title="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="footer-col-list">
          <h4 className="footer-col-header">Services</h4>
          <ul className="footer-links-list">
            <li><button type="button" onClick={() => scrollToSection('services')} className="footer-btn-link">Web Development</button></li>
            <li><button type="button" onClick={() => scrollToSection('services')} className="footer-btn-link">Mobile App Development</button></li>
            <li><button type="button" onClick={() => scrollToSection('services')} className="footer-btn-link">AI & Machine Learning</button></li>
            <li><button type="button" onClick={() => scrollToSection('services')} className="footer-btn-link">Data Analytics</button></li>
            <li><button type="button" onClick={() => scrollToSection('services')} className="footer-btn-link">UI/UX Design</button></li>
            <li><button type="button" onClick={() => scrollToSection('services')} className="footer-btn-link">Cloud & IT Solutions</button></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-col-list">
          <h4 className="footer-col-header">Company</h4>
          <ul className="footer-links-list">
            <li><button type="button" onClick={() => scrollToSection('home')} className="footer-btn-link">Home</button></li>
            <li><button type="button" onClick={() => scrollToSection('about')} className="footer-btn-link">About Us</button></li>
            <li><button type="button" onClick={() => scrollToSection('projects')} className="footer-btn-link">Case Studies</button></li>
            <li><button type="button" onClick={() => scrollToSection('careers')} className="footer-btn-link">Careers</button></li>
            <li><button type="button" onClick={() => scrollToSection('contact')} className="footer-btn-link">Contact</button></li>
          </ul>
        </div>

        {/* Inquiries Column */}
        <div className="footer-col-list">
          <h4 className="footer-col-header">Inquiries</h4>
          <div className="footer-inquiry-box">
            <span className="inquiry-label">Direct Email</span>
            <a href="mailto:alisajjad131309188@gmail.com" className="footer-inquiry-link">
              alisajjad131309188@gmail.com
            </a>

            <span className="inquiry-label" style={{ marginTop: '0.65rem' }}>Phone & WhatsApp</span>
            <a href="https://wa.me/923073036015" target="_blank" rel="noreferrer" className="footer-inquiry-link">
              +92 307 3036015
            </a>

            <span className="inquiry-label" style={{ marginTop: '0.65rem' }}>Location</span>
            <span className="footer-inquiry-text">Karachi, Pakistan</span>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <Link to="/login" className="employee-portal-pill">
              <span className="portal-indicator"></span>
              <span>Staff Portal</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>

      <div className="footer-baseline-strip">
        <div className="content-row baseline-flex">
          <p>&copy; 2026 Nexora Solutions Inc. All rights reserved.</p>
          <p style={{ color: '#64748b' }}>Production Portfolio Demonstration</p>
        </div>
      </div>
    </footer>
  );
}