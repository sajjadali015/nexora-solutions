import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Data Analytics', 'Cloud & IT Solutions', 'AI & Machine Learning', 'Mobile App Development'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div className="projects-page-root">
      <div className="projects-bounds">
        
        {/* Header */}
        <div className="projects-header-center">
          <span className="projects-badge">Portfolio Showcase</span>
          <h1 className="projects-h1">Production-Grade Case Studies</h1>
          <p className="projects-lead-p">
            Explore software platforms, business intelligence dashboards, and distributed architectures engineered with clean code and measurable outcomes.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`project-tab-btn ${activeCategory === cat ? 'is-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-catalog-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-container">
              
              <div className="project-card-content">
                <div className="project-card-meta">
                  <span className="project-cat-pill">{project.category}</span>
                  <span className="project-client-name">{project.client}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-summary">{project.summary}</p>

                <div className="project-metrics-row">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="project-metric-box">
                      <span className="pm-val">{m.val}</span>
                      <span className="pm-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="project-card-footer">
                  <div className="project-tech-chips">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-chip-item">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="tech-chip-item more">+{project.techStack.length - 3}</span>
                    )}
                  </div>

                  <Link to={`/projects/${project.id}`} className="btn-view-case-study">
                    <span>Inspect Architecture</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}