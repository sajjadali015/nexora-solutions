import React from 'react';
import { 
  Code2, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const SERVICES_CATALOG = [
  {
    title: "Web Applications",
    icon: Code2,
    tagline: "Modern Single-Page Architectures",
    desc: "Single-page and server-rendered web portals built on React, clean component boundaries, and state isolation.",
    deliverables: [
      "State-driven React user interfaces",
      "RESTful API integration & client caching",
      "Strict responsive layout standards",
      "Lighthouse 95+ performance optimization"
    ],
    tech: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Node.js"]
  },
  {
    title: "Data Analytics & BI",
    icon: BarChart3,
    tagline: "Business Intelligence & SQL Modeling",
    desc: "Executive business intelligence dashboards, automated data aggregation pipelines, and relational reporting models.",
    deliverables: [
      "KPI reporting dashboards with custom filters",
      "Optimized PostgreSQL schema queries & indexes",
      "Automated ETL data cleaning scripts",
      "Executive summary exports"
    ],
    tech: ["PostgreSQL", "Python", "Pandas", "Power BI", "SQL"]
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    tagline: "Cross-Platform Mobile Engineering",
    desc: "Cross-platform mobile applications for iOS and Android with unified business logic and offline SQLite synchronization.",
    deliverables: [
      "iOS & Android cross-platform feature parity",
      "Local offline data caching & synchronization",
      "Push notification architecture",
      "Hardware and biometric authentication"
    ],
    tech: ["React Native", "TypeScript", "REST APIs", "Mobile UI"]
  },
  {
    title: "UI/UX Design Systems",
    icon: Palette,
    tagline: "User-Centric Digital Interfaces",
    desc: "Comprehensive Figma design systems, interactive prototypes, and accessible design tokens built to minimize user churn.",
    deliverables: [
      "Reusable component design libraries",
      "Click-through interactive wireframes",
      "WCAG 2.1 AA accessibility compliance",
      "Ergonomic mobile touch targets"
    ],
    tech: ["Figma", "Design Tokens", "Wireframing", "Usability Audits"]
  },
  {
    title: "Software Solutions",
    icon: Server,
    tagline: "Transactional Backend Architecture",
    desc: "High-throughput RESTful APIs, relational schema models, and secure authentication services built for reliability.",
    deliverables: [
      "Relational schema modeling with Prisma",
      "Role-Based Access Control (JWT)",
      "Strict CORS and Helmet protection",
      "Database connection pooling"
    ],
    tech: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL"]
  },
  {
    title: "IT Consulting & Audits",
    icon: ShieldCheck,
    tagline: "Technical Optimization & Security",
    desc: "Audits on existing codebases, database indexing strategies, Git team workflows, and cloud container deployments.",
    deliverables: [
      "Database query profiling & bottleneck audits",
      "Security hardening & input sanitization",
      "Git branching & PR collaboration workflows",
      "Deployment pipeline automation"
    ],
    tech: ["Git", "GitHub", "Docker", "Linux CLI"]
  }
];

export default function Services() {
  return (
    <div className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div className="content-row">
        
        <div className="section-header">
          <span className="pill-badge">Our Offerings</span>
          <h1 className="headline-primary">Digital Engineering Services</h1>
          <p className="subheadline-muted">
            Explore our capabilities across web engineering, mobile development, and data analytics.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
          {SERVICES_CATALOG.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div 
                key={i} 
                style={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  border: '1px solid var(--border-subtle)', 
                  borderRadius: '12px', 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--badge-bg)', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.35rem' }}>{svc.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--brand-accent)', fontWeight: '600', marginBottom: '0.85rem', display: 'block' }}>{svc.tagline}</span>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{svc.desc}</p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', display: 'block', marginBottom: '0.6rem' }}>
                    Deliverables
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {svc.deliverables.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={14} color="var(--brand-success)" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {svc.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} style={{ fontSize: '0.75rem', background: 'var(--bg-inset)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-muted)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-primary)', fontWeight: '600', fontSize: '0.85rem' }}>
                    Inquire <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}