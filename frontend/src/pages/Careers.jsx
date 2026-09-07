import React, { useState } from 'react';
import './Careers.css';

const JOB_OPENINGS = [
  {
    id: 'job-1',
    title: 'Junior Web Developer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-Time',
    compensation: '$55,000 - $70,000',
    description: 'Build responsive client interfaces in React, work with REST APIs, and maintain reusable UI component architectures.',
    requirements: [
      'Strong foundational knowledge of React, JavaScript (ES6+), HTML5, and CSS3',
      'Understanding of asynchronous API consumption and state handling',
      'Proficiency with Git workflow (branches, pull requests, reviews)',
      'BS in Computer Science or equivalent practical portfolio experience'
    ]
  },
  {
    id: 'job-2',
    title: 'Full Stack Engineer Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship (6 Months)',
    compensation: 'Competitive Stipend',
    description: 'Work alongside lead architects building Node.js/Express REST APIs, modeling relational databases with Prisma, and deploying frontend features.',
    requirements: [
      'Experience with Node.js and Express backend routing',
      'Relational database fundamentals (SQL / PostgreSQL)',
      'Eagerness to learn Prisma ORM, automated testing, and Docker',
      'Strong debugging and algorithmic fundamentals'
    ]
  },
  {
    id: 'job-3',
    title: 'Data Analyst Intern',
    department: 'Data',
    location: 'Hybrid',
    type: 'Internship (3-6 Months)',
    compensation: 'Competitive Stipend',
    description: 'Construct business intelligence dashboards, write optimized SQL aggregations, and process metrics pipelines for client reporting.',
    requirements: [
      'SQL querying proficiency (joins, aggregations, window functions)',
      'Working knowledge of Python (Pandas) or BI tools (Power BI, Tableau)',
      'Analytical mindset with sharp attention to data validation',
      'Ability to translate raw numbers into clear charts'
    ]
  },
  {
    id: 'job-4',
    title: 'UI/UX Designer Intern',
    department: 'Design',
    location: 'Remote',
    type: 'Internship (3 Months)',
    compensation: 'Competitive Stipend',
    description: 'Design ergonomic layouts, prototype component libraries in Figma, and validate responsive touch interactions.',
    requirements: [
      'Portfolio of interface prototypes and wireframes in Figma',
      'Understanding of design systems and WCAG accessibility standards',
      'Clear rationale behind UX flows and spacing hierarchies'
    ]
  }
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeJobModal, setActiveJobModal] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resumeFileName: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredJobs = selectedDept === 'All' 
    ? JOB_OPENINGS 
    : JOB_OPENINGS.filter(j => j.department === selectedDept);

  const handleOpenModal = (job) => {
    setActiveJobModal(job);
    setIsSubmitted(false);
    setFormErrors({});
    setFormData({ name: '', email: '', phone: '', resumeFileName: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resumeFileName: e.target.files[0].name }));
      if (formErrors.resumeFileName) setFormErrors(prev => ({ ...prev, resumeFileName: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'A valid email address is required.';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required.';
    if (!formData.resumeFileName) errors.resumeFileName = 'Resume upload is required.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="careers-page-root">
      <div className="careers-bounds">
        
        {/* Header */}
        <div className="careers-header-center">
          <span className="careers-badge">Opportunities</span>
          <h1 className="careers-h1">Build Your Future at Nexora Solutions</h1>
          <p className="careers-lead-p">
            We are looking for ambitious problem solvers to engineer production platforms, model clean data architectures, and build seamless digital experiences.
          </p>
        </div>

        {/* High-Contrast Interactive Filter Pills */}
        <div className="careers-filter-row">
          {['All', 'Engineering', 'Data', 'Design'].map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`career-tab-btn ${selectedDept === dept ? 'is-active' : ''}`}
            >
              {dept === 'All' ? 'All Openings' : dept}
            </button>
          ))}
        </div>

        {/* Jobs Catalog List */}
        <div className="job-cards-stack">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-listing-panel">
              <div className="job-title-row">
                <div>
                  <h3 className="job-title-h3">{job.title}</h3>
                  <div className="job-meta-chips">
                    <span className="job-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                      {job.department}
                    </span>
                    <span className="job-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {job.location}
                    </span>
                    <span className="job-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {job.type}
                    </span>
                    <span className="job-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      {job.compensation}
                    </span>
                  </div>
                </div>

                <button onClick={() => handleOpenModal(job)} className="btn-apply-job">
                  <span>Apply Now</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>

              <p className="job-desc-p">{job.description}</p>

              <div className="job-reqs-card">
                <span className="job-reqs-label">Key Qualifications:</span>
                <ul className="job-reqs-ul">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Window */}
        {activeJobModal && (
          <div className="modal-backdrop-overlay" onClick={() => setActiveJobModal(null)}>
            <div className="modal-dialog-box" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setActiveJobModal(null)} 
                className="modal-close-btn"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="modal-form-stack">
                  <div>
                    <h3 className="modal-title-h3">Apply for Position</h3>
                    <p className="modal-role-subtitle">{activeJobModal.title} &bull; {activeJobModal.location}</p>
                  </div>

                  <div className="modal-input-field">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Sajjad Ali"
                      className="modal-text-input"
                    />
                    {formErrors.name && <span className="modal-err-msg">{formErrors.name}</span>}
                  </div>

                  <div className="modal-input-field">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="name@domain.com"
                      className="modal-text-input"
                    />
                    {formErrors.email && <span className="modal-err-msg">{formErrors.email}</span>}
                  </div>

                  <div className="modal-input-field">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+92 300 0000000"
                      className="modal-text-input"
                    />
                    {formErrors.phone && <span className="modal-err-msg">{formErrors.phone}</span>}
                  </div>

                  <div className="modal-input-field">
                    <label>Upload Resume / CV (PDF / DOCX) *</label>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileUpload} 
                      className="modal-file-input"
                    />
                    {formData.resumeFileName && (
                      <span style={{ color: 'var(--brand-emerald)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
                        Selected: {formData.resumeFileName}
                      </span>
                    )}
                    {formErrors.resumeFileName && <span className="modal-err-msg">{formErrors.resumeFileName}</span>}
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    Submit Application &rarr;
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--brand-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>Application Received</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    Thank you for applying for <strong>{activeJobModal.title}</strong> at Nexora Solutions. Our team will review your qualifications and contact you.
                  </p>
                  <button 
                    onClick={() => setActiveJobModal(null)}
                    className="modal-submit-btn"
                    style={{ width: '100%' }}
                  >
                    Return to Openings
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}