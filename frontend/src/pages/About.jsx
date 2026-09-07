import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  const leadership = [
    {
      name: "Alex Thorne",
      role: "Lead Systems Architect",
      bio: "Enterprise systems engineer specializing in PostgreSQL relational optimization, database indexing, and distributed microservices.",
      avatarBg: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    {
      name: "Marcus Vance",
      role: "Head of Engineering",
      bio: "Full-stack specialist with expertise in React component architectures, Node.js runtimes, and REST API integration.",
      avatarBg: "linear-gradient(135deg, #06b6d4, #0891b2)"
    },
    {
      name: "Rachel Zhao",
      role: "Director of Data Analytics",
      bio: "Data scientist focused on scalable ETL aggregation pipelines, operational metrics modeling, and BI dashboard design.",
      avatarBg: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      name: "Liam O'Connor",
      role: "Lead UI/UX Designer",
      bio: "Product designer committed to accessibility standards (WCAG 2.1 AA), ergonomics, and scalable design token systems.",
      avatarBg: "linear-gradient(135deg, #a855f7, #7c3aed)"
    }
  ];

  return (
    <div className="about-root">
      
      {/* 1. Header Banner */}
      <section className="about-hero-section">
        <div className="about-bounds">
          <span className="about-badge">Company Profile</span>
          <h1 className="about-hero-h1">Engineered For Quality. Built For Scale.</h1>
          <p className="about-hero-p">
            Nexora Solutions is a technology firm dedicated to solving complex organizational challenges 
            through robust web frameworks, clean system architectures, and verifiable data integrity.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="about-section">
        <div className="about-bounds">
          <div className="mv-dual-grid">
            
            <div className="mv-card">
              <div className="mv-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                To deliver production-ready software solutions that eliminate operational friction, 
                reduce technical debt, and give companies complete mastery over their transactional and business data.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-text">
                To become the benchmark in digital engineering partnerships by proving that rigorous architecture, 
                clean component isolation, and deterministic execution always outperform shortcuts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Engineering Principles */}
      <section className="about-section tinted">
        <div className="about-bounds">
          <div className="section-head-center">
            <span className="about-badge">Core Standards</span>
            <h2 className="about-h2">The Values Guiding Every Line of Code</h2>
            <p className="about-sub">We hold our development practices to clear enterprise software benchmarks.</p>
          </div>

          <div className="principles-grid">
            <div className="principle-card">
              <span className="p-num">01</span>
              <h4>Architectural Rigor</h4>
              <p>We write modular, maintainable, and type-checked software that teams can scale without complete rewrites.</p>
            </div>

            <div className="principle-card">
              <span className="p-num">02</span>
              <h4>Data Integrity</h4>
              <p>Strict relational schemas, normalized foreign keys, and ACID transactional guarantees at every layer.</p>
            </div>

            <div className="principle-card">
              <span className="p-num">03</span>
              <h4>Radical Transparency</h4>
              <p>Clear documentation, Git version control, structured pull request audits, and zero hidden dependencies.</p>
            </div>

            <div className="principle-card">
              <span className="p-num">04</span>
              <h4>User-Centric Design</h4>
              <p>Software is only successful if users can navigate interfaces effortlessly with zero operational friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Engineering Personnel */}
      <section className="about-section">
        <div className="about-bounds">
          <div className="section-head-center">
            <span className="about-badge">Team Roster</span>
            <h2 className="about-h2">Engineering & Architectural Leadership</h2>
            <p className="about-sub">Sample portfolio personnel representing our key competency areas.</p>
          </div>

          <div className="team-roster-grid">
            {leadership.map((person, idx) => (
              <div key={idx} className="team-member-card">
                <div className="member-avatar" style={{ background: person.avatarBg }}>
                  <span>{person.name.charAt(0)}</span>
                </div>
                <h4 className="member-name">{person.name}</h4>
                <span className="member-role">{person.role}</span>
                <p className="member-bio">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="about-section" style={{ paddingTop: 0 }}>
        <div className="about-bounds">
          <div className="about-cta-banner">
            <h2>Ready to collaborate with our engineering team?</h2>
            <p>
              Whether you need to scale your web infrastructure, engineer an analytics dashboard, 
              or audit existing software, we are ready to assist.
            </p>
            <Link to="/contact" className="btn-about-cta">
              Schedule an Architecture Review &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}