import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const services = [
    {
      title: "Web Development",
      category: "Full Stack & SPAs",
      desc: "High-performance web applications built on React, clean component boundaries, and sub-second load times.",
      deliverables: ["React & Node.js SPAs", "RESTful API Integration", "SEO & Meta Optimization"],
      stack: "React, Node.js, Express, JavaScript (ES6+)",
      iconBg: "rgba(59, 130, 246, 0.15)",
      iconColor: "#3b82f6"
    },
    {
      title: "Mobile App Development",
      category: "iOS & Android",
      desc: "Cross-platform mobile applications that provide native responsiveness, offline SQLite persistence, and push triggers.",
      deliverables: ["Cross-Platform Parity", "Local Offline Sync", "Biometric Authentication"],
      stack: "React Native, TypeScript, Mobile UI",
      iconBg: "rgba(6, 182, 212, 0.15)",
      iconColor: "#06b6d4"
    },
    {
      title: "AI & Machine Learning",
      category: "Intelligent Solutions",
      desc: "Practical AI integration, prompt engineering, predictive modeling, and intelligent workflow automation.",
      deliverables: ["Predictive Analytics", "LLM API Integrations", "Automated Document Workflows"],
      stack: "Python, TensorFlow, Scikit-Learn, PyTorch",
      iconBg: "rgba(168, 85, 247, 0.15)",
      iconColor: "#a855f7"
    },
    {
      title: "Data Analytics",
      category: "BI & Aggregations",
      desc: "Transform chaotic databases into executive dashboards with SQL query indexing and automated ETL pipelines.",
      deliverables: ["KPI Reporting Dashboards", "Relational SQL Aggregations", "Automated Data Cleaning"],
      stack: "PostgreSQL, Python, Pandas, Power BI",
      iconBg: "rgba(16, 185, 129, 0.15)",
      iconColor: "#10b981"
    },
    {
      title: "UI/UX Design",
      category: "Ergonomics & Systems",
      desc: "High-fidelity interactive wireframes, component design systems, and user-tested conversion flows.",
      deliverables: ["Figma Interactive Mockups", "Design Token Libraries", "WCAG 2.1 AA Audits"],
      stack: "Figma, Design Tokens, UX Wireframes",
      iconBg: "rgba(245, 158, 11, 0.15)",
      iconColor: "#f59e0b"
    },
    {
      title: "Cloud & IT Solutions",
      category: "Infrastructure & DevOps",
      desc: "Robust backend microservices, database schemas, Docker containerization, and security reviews.",
      deliverables: ["Prisma Schema Migrations", "JWT Role-Based Auth", "Containerized Docker Deploys"],
      stack: "Docker, Prisma, PostgreSQL, Linux",
      iconBg: "rgba(239, 68, 68, 0.15)",
      iconColor: "#ef4444"
    }
  ];

  return (
    <div className="home-root">
      
      {/* 1. Hero Section */}
      <section className="hero-block">
        <div className="site-bounds hero-grid">
          
          <div className="hero-copy">
            <span className="hero-pill">Modern Technology & IT Services</span>
            <h1 className="hero-heading">
              Transforming Ideas Into <br />
              <span className="hero-gradient">Digital Solutions.</span>
            </h1>
            <p className="hero-desc">
              Nexora Solutions partners with ambitious businesses to build scalable web applications, 
              robust cloud architectures, intelligent AI models, and data-driven dashboards designed for operational scale.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary-action">
                <span>Start Discovery</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/projects" className="btn-secondary-action">
                Explore Case Studies
              </Link>
            </div>

            <div className="hero-meta-strip">
              <div className="meta-stat">
                <span className="m-val">99.9%</span>
                <span className="m-txt">Architecture SLA</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-stat">
                <span className="m-val">&lt;140ms</span>
                <span className="m-txt">Query Latency</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-stat">
                <span className="m-val">ACID</span>
                <span className="m-txt">Data Integrity</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Operations Dashboard Mockup */}
          <div className="hero-display">
            <div className="screen-frame">
              <div className="screen-bar">
                <div className="screen-dots">
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                </div>
                <span className="screen-url">nexora-analytics.portal/operations</span>
                <span className="live-pill">LIVE ENGINE</span>
              </div>

              <div className="screen-body">
                <div className="card-kpi-row">
                  <div className="kpi-mini">
                    <span className="k-lbl">Total Revenue</span>
                    <span className="k-val">$148,290</span>
                    <span className="k-delta">+18.4% growth</span>
                  </div>
                  <div className="kpi-mini">
                    <span className="k-lbl">Processed Orders</span>
                    <span className="k-val">3,892</span>
                    <span className="k-delta">+9.1% target</span>
                  </div>
                  <div className="kpi-mini">
                    <span className="k-lbl">DB Latency</span>
                    <span className="k-val">128ms</span>
                    <span className="k-delta">Indexed SQL</span>
                  </div>
                </div>

                <div className="chart-wrapper">
                  <div className="chart-header">
                    <span>Revenue Trajectory & Daily Aggregations</span>
                    <span className="chart-sub">Past 30 Days</span>
                  </div>
                  <div className="bar-grid">
                    {[45, 62, 54, 78, 69, 88, 76, 110, 94, 122, 114, 138].map((h, i) => (
                      <div key={i} className="bar-col">
                        <div className="bar-meter" style={{ height: `${(h / 138) * 100}%` }}></div>
                        <span className="bar-lbl">W{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="screen-status-row">
                  <span>Relational Schema Migration #04 Active</span>
                  <span className="status-success">100% Deterministic</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Key Trust Bar */}
      <section className="trust-strip">
        <div className="site-bounds">
          <div className="trust-grid">
            <div className="trust-cell">
              <span className="t-num">50+</span>
              <span className="t-lbl">Projects Delivered</span>
            </div>
            <div className="trust-cell">
              <span className="t-num">30+</span>
              <span className="t-lbl">Active Clients</span>
            </div>
            <div className="trust-cell">
              <span className="t-num">10+</span>
              <span className="t-lbl">Modern Technologies</span>
            </div>
            <div className="trust-cell">
              <span className="t-num">5+</span>
              <span className="t-lbl">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Section (6 Cards Layout) */}
      <section className="section-block">
        <div className="site-bounds">
          <div className="section-header">
            <span className="pill-badge">Core Capabilities</span>
            <h2 className="section-h2">Solutions Built For Modern Scale</h2>
            <p className="section-p">
              From client-facing web portals to high-throughput relational databases and intelligent AI, 
              we engineer reliable software solutions end-to-end.
            </p>
          </div>

          <div className="services-six-grid">
            {services.map((svc, idx) => (
              <div key={idx} className="service-card">
                <div className="card-top">
                  <div className="svc-icon" style={{ backgroundColor: svc.iconBg, color: svc.iconColor }}>
                    <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>0{idx + 1}</span>
                  </div>
                  <span className="svc-cat">{svc.category}</span>
                </div>

                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.desc}</p>

                <div className="svc-deliverables">
                  <span className="deliv-hdr">Deliverables:</span>
                  <ul className="deliv-ul">
                    {svc.deliverables.map((item, i) => (
                      <li key={i}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-bottom">
                  <span className="svc-stack">{svc.stack}</span>
                  <Link to="/services" className="card-action-link">
                    Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Data Analytics Section */}
      <section className="section-block tinted">
        <div className="site-bounds analytics-row">
          
          <div className="analytics-copy">
            <span className="pill-badge">Analytics & Business Intelligence</span>
            <h2 className="section-h2" style={{ textAlign: 'left' }}>
              Turn Operational Data Into Actionable Growth
            </h2>
            <p className="section-p" style={{ textAlign: 'left', marginBottom: '1.75rem' }}>
              We build end-to-end data pipelines that clean, transform, and aggregate operational metrics. 
              Gain clarity over revenue channels, order velocity, and regional performance in real time.
            </p>

            <div className="analytics-stats">
              <div className="a-stat">
                <span className="as-val">3.2x Faster</span>
                <span className="as-lbl">PostgreSQL schema indexing for instant query aggregations.</span>
              </div>
              <div className="a-stat">
                <span className="as-val">100% Deterministic</span>
                <span className="as-lbl">Zero variance between raw transaction records and executive reporting charts.</span>
              </div>
            </div>

            <Link to="/projects" className="btn-primary-action" style={{ marginTop: '2rem', width: 'fit-content' }}>
              <span>View Data Projects</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="analytics-box">
            <div className="sheet-frame">
              <div className="sheet-header">
                <span>Executive Regional Breakdown</span>
                <span className="live-pill">Power BI / SQL</span>
              </div>
              
              <div className="kpi-mini-strip">
                <div className="km-item">
                  <span className="km-lbl">Total Revenue</span>
                  <span className="km-val">$148,290</span>
                </div>
                <div className="km-item">
                  <span className="km-lbl">Orders</span>
                  <span className="km-val">3,892</span>
                </div>
                <div className="km-item">
                  <span className="km-lbl">Gross Margin</span>
                  <span className="km-val">32.4%</span>
                </div>
              </div>

              <div className="sheet-table">
                <div className="tr th">
                  <span>Region</span>
                  <span>Units</span>
                  <span>Revenue</span>
                </div>
                <div className="tr">
                  <span>North America</span>
                  <span>1,420</span>
                  <span className="money">$54,200</span>
                </div>
                <div className="tr">
                  <span>Europe</span>
                  <span>1,190</span>
                  <span className="money">$45,120</span>
                </div>
                <div className="tr">
                  <span>Asia-Pacific</span>
                  <span>1,282</span>
                  <span className="money">$48,970</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Case Studies Showcase */}
      <section className="section-block">
        <div className="site-bounds">
          <div className="section-header">
            <span className="pill-badge">Selected Work</span>
            <h2 className="section-h2">Production Case Studies</h2>
            <p className="section-p">Real-world systems engineered with clean architectures and measurable outcomes.</p>
          </div>

          <div className="case-studies-grid">
            
            <div className="case-card">
              <div className="case-left">
                <span className="case-badge">Enterprise SaaS & Analytics</span>
                <h3 className="case-title">Sales Analytics & Business Intelligence Platform</h3>
                <p className="case-desc">
                  An interactive executive reporting platform allowing teams to track revenue trajectories, 
                  customer acquisition trends, and multi-channel performance with aggregated PostgreSQL queries.
                </p>
                <div className="case-pills">
                  <span>React</span>
                  <span>PostgreSQL</span>
                  <span>Node.js</span>
                  <span>SQL</span>
                </div>
                <Link to="/projects/1" className="case-btn">
                  <span>View Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                </Link>
              </div>
              <div className="case-right">
                <div className="telemetry-box">
                  <div>
                    <span className="t-lbl">Pipeline Value</span>
                    <span className="t-val">$1,280,450</span>
                  </div>
                  <div>
                    <span className="t-lbl">Query Speed</span>
                    <span className="t-val">110ms</span>
                  </div>
                  <div>
                    <span className="t-lbl">Data Integrity</span>
                    <span className="t-val">100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-card">
              <div className="case-left">
                <span className="case-badge">Healthcare Operations</span>
                <h3 className="case-title">Hospital Operations & Patient Allocation Portal</h3>
                <p className="case-desc">
                  A secure hospital management platform handling doctor shift scheduling, administrative patient records, 
                  and outpatient billing ledgers with role-based access control and zero database query locks.
                </p>
                <div className="case-pills">
                  <span>React</span>
                  <span>Express.js</span>
                  <span>Prisma ORM</span>
                  <span>PostgreSQL</span>
                </div>
                <Link to="/projects/3" className="case-btn">
                  <span>View Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                </Link>
              </div>
              <div className="case-right">
                <div className="telemetry-box">
                  <div>
                    <span className="t-lbl">Records Managed</span>
                    <span className="t-val">24,000+</span>
                  </div>
                  <div>
                    <span className="t-lbl">Access Latency</span>
                    <span className="t-val">140ms</span>
                  </div>
                  <div>
                    <span className="t-lbl">Platform Uptime</span>
                    <span className="t-val">99.98%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Process Flow (Append/Arsha Style) */}
      <section className="section-block tinted">
        <div className="site-bounds">
          <div className="section-header">
            <span className="pill-badge">Execution Blueprint</span>
            <h2 className="section-h2">How We Deliver Results</h2>
            <p className="section-p">A transparent, stage-gated engineering lifecycle from scoping to cloud deployment.</p>
          </div>

          <div className="process-grid">
            {[
              { step: "01", name: "Discover", text: "Analyze business requirements, project goals, user journeys, and constraints." },
              { step: "02", name: "Plan", text: "Establish database models, API contracts, and sprint deliverables." },
              { step: "03", name: "Design", text: "Create high-fidelity UI prototypes and component design tokens." },
              { step: "04", name: "Develop", text: "Write clean, modular frontend and backend code with strict Git reviews." },
              { step: "05", name: "Test", text: "Validate endpoints, responsive layouts, data integrity, and cross-browser stability." },
              { step: "06", name: "Launch", text: "Deploy to cloud production environments with health monitoring and documentation." }
            ].map((p, i) => (
              <div key={i} className="process-item">
                <span className="p-step">{p.step}</span>
                <h4 className="p-title">{p.name}</h4>
                <p className="p-desc">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology Stack Matrix */}
      <section className="section-block">
        <div className="site-bounds">
          <div className="section-header">
            <span className="pill-badge">Industry Standards</span>
            <h2 className="section-h2">Modern Technology Stack</h2>
            <p className="section-p">We engineer using reliable, performant tools that are maintainable and scalable.</p>
          </div>

          <div className="tech-matrix">
            {[
              { cat: "Frontend", tools: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Modern CSS"] },
              { cat: "Backend", tools: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"] },
              { cat: "Database", tools: ["PostgreSQL", "Prisma ORM", "Relational Modeling", "SQL Indexing"] },
              { cat: "Data & AI", tools: ["Python", "Pandas", "Power BI", "SQL Data Aggregation"] },
              { cat: "DevOps", tools: ["Git", "GitHub", "Docker", "VS Code"] }
            ].map((col, idx) => (
              <div key={idx} className="tech-card">
                <h4 className="tech-heading">{col.cat}</h4>
                <ul className="tech-list">
                  {col.tools.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call To Action */}
      <section className="section-block" style={{ paddingTop: 0 }}>
        <div className="site-bounds">
          <div className="cta-banner">
            <span className="pill-badge" style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff' }}>
              Let's Collaborate
            </span>
            <h2 className="cta-heading">Ready to engineer your next digital solution?</h2>
            <p className="cta-sub">
              Whether you need a full-stack web application, an executive business intelligence dashboard, 
              or a scalable backend architecture, our team brings ideas into production with precision.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-white">
                <span>Schedule a Consultation</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/projects" className="btn-cta-ghost">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}