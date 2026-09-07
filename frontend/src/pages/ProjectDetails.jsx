import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="case-study-root">
      <div className="case-study-bounds">
        
        {/* Navigation Breadcrumb */}
        <div className="case-study-breadcrumb">
          <Link to="/projects" className="breadcrumb-back-link">
            &larr; Back to Case Studies
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{project.title}</span>
        </div>

        {/* Hero Meta Header */}
        <div className="case-study-hero">
          <span className="case-study-badge">{project.category}</span>
          <h1 className="case-study-h1">{project.title}</h1>
          <p className="case-study-lead">{project.summary}</p>

          <div className="case-meta-spec-bar">
            <div className="spec-meta-item">
              <span className="smi-label">Client</span>
              <span className="smi-val">{project.client}</span>
            </div>
            <div className="spec-meta-divider"></div>
            <div className="spec-meta-item">
              <span className="smi-label">Timeline</span>
              <span className="smi-val">{project.timeline}</span>
            </div>
            <div className="spec-meta-divider"></div>
            <div className="spec-meta-item">
              <span className="smi-label">Role</span>
              <span className="smi-val">{project.role}</span>
            </div>
          </div>
        </div>

        {/* Key Metrics Band */}
        <div className="case-metrics-banner">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="case-metric-column">
              <span className="cm-val">{m.val}</span>
              <span className="cm-label">{m.label}</span>
              <span className="cm-note">{m.note}</span>
            </div>
          ))}
        </div>

        {/* Main Architectural Body */}
        <div className="case-study-layout-grid">
          
          <div className="case-study-primary-content">
            
            {/* Overview */}
            <section className="case-content-section">
              <h2 className="case-sec-h2">Project Overview</h2>
              <p className="case-body-p">{project.overview}</p>
            </section>

            {/* Problem & Solution */}
            <div className="case-challenge-solution-grid">
              <div className="cs-block challenge">
                <div className="cs-block-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3 className="cs-block-title">The Engineering Challenge</h3>
                <p className="cs-block-text">{project.challenge}</p>
              </div>

              <div className="cs-block solution">
                <div className="cs-block-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="cs-block-title">The Implemented Solution</h3>
                <p className="cs-block-text">{project.solution}</p>
              </div>
            </div>

            {/* System Architecture */}
            <section className="case-content-section">
              <h2 className="case-sec-h2">System Architecture & Pipeline</h2>
              <div className="architecture-list-card">
                <ul className="arch-ul">
                  {project.architecture.map((item, i) => (
                    <li key={i}>
                      <span className="arch-bullet">0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Database & Schema Highlights */}
            <section className="case-content-section">
              <h2 className="case-sec-h2">Relational Modeling & Schema Optimization</h2>
              <div className="schema-highlights-card">
                <div className="schema-code-header">
                  <span>POSTGRESQL SPECIFICATION</span>
                  <span className="live-sql-badge">ACID VERIFIED</span>
                </div>
                <ul className="schema-ul">
                  {project.schemaHighlights.map((hl, i) => (
                    <li key={i}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                      <code>{hl}</code>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Right Sidebar: Tech Stack & Inquiry */}
          <aside className="case-study-sidebar">
            
            <div className="sidebar-widget">
              <h4 className="widget-title">Technology Stack</h4>
              <div className="widget-tech-pills">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="w-tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-widget telemetry">
              <h4 className="widget-title">Operational Telemetry</h4>
              <div className="telemetry-stat-row">
                <span className="t-key">Monthly Run Rate:</span>
                <span className="t-value">{project.liveTelemetry.mrr}</span>
              </div>
              <div className="telemetry-stat-row">
                <span className="t-key">Cluster Infrastructure:</span>
                <span className="t-value">{project.liveTelemetry.activeNodes}</span>
              </div>
              <div className="telemetry-stat-row">
                <span className="t-key">Cache Hit Efficiency:</span>
                <span className="t-value">{project.liveTelemetry.cacheHitRate}</span>
              </div>
            </div>

            <div className="sidebar-widget cta">
              <h4 className="widget-title" style={{ color: '#ffffff' }}>Build Similar Architecture</h4>
              <p className="sidebar-cta-p">Ready to eliminate technical debt and deploy scalable software?</p>
              <Link to="/contact" className="btn-sidebar-quote">
                Schedule a Consultation &rarr;
              </Link>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}