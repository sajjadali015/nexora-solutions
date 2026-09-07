import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './ServiceCard.css';

export default function ServiceCard({ title, description, icon: Icon, features, technologies, linkText = "Request Proposal" }) {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <div className="service-card-icon">
          <Icon size={26} />
        </div>
        <h3 className="service-card-title">{title}</h3>
      </div>
      
      <p className="service-card-desc">{description}</p>

      <div className="service-card-section">
        <h4 className="service-subheading">Key Deliverables</h4>
        <ul className="service-features-list">
          {features.map((feature, idx) => (
            <li key={idx} className="service-feature-item">
              <CheckCircle2 size={16} className="feature-bullet-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="service-card-section">
        <h4 className="service-subheading">Core Technologies</h4>
        <div className="service-tech-badges">
          {technologies.map((tech, idx) => (
            <span key={idx} className="service-tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="service-card-footer">
        <Link to="/contact" className="btn-service-action">
          {linkText} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}