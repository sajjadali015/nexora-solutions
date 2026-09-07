import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nexora-header ${scrolled ? 'is-sticky' : ''}`}>
      <div className="header-container">
        
        {/* Brand Logo */}
        <Link to="/" className="brand-badge" onClick={() => setMobileOpen(false)}>
          <div className="brand-icon">N</div>
          <div className="brand-text">
            <span className="brand-title">NEXORA</span>
            <span className="brand-sub">SOLUTIONS</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="desktop-menu">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>About</NavLink>
          <NavLink to="/careers" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            Careers <span className="hiring-badge">Hiring</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>Contact</NavLink>
        </nav>

        {/* Utilities: Moon/Sun Toggle & CTA */}
        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>

          <Link to="/contact" className="btn-cta-nav">
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M4 12h16M4 6h16M4 18h16"/>}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <NavLink to="/" end onClick={() => setMobileOpen(false)} className="mob-link">Home</NavLink>
          <NavLink to="/services" onClick={() => setMobileOpen(false)} className="mob-link">Services</NavLink>
          <NavLink to="/projects" onClick={() => setMobileOpen(false)} className="mob-link">Projects</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)} className="mob-link">About</NavLink>
          <NavLink to="/careers" onClick={() => setMobileOpen(false)} className="mob-link">Careers</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="mob-link">Contact</NavLink>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="mob-cta">Start a Project</Link>
        </div>
      )}
    </header>
  );
}