import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Application Development',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'A valid business email address is required.';
    }
    if (!formData.message.trim()) errors.message = 'Please provide brief details about your project scope.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="contact-page-root">
      <div className="contact-bounds">
        <div className="contact-grid-layout">
          
          {/* LEFT SIDE: Heading & Verified Contact Cards */}
          <div className="contact-info-column">
            <span className="contact-pill-tag">Discovery & Inquiries</span>
            <h1 className="contact-main-h1">Let's build something scalable together.</h1>
            <p className="contact-lead-desc">
              Have a project in mind, need architectural consulting, or want to explore our analytics capabilities? 
              Reach out directly and our engineering team will respond within 24 hours.
            </p>

            <div className="contact-cards-grid">
              
              {/* 1. Email Card */}
              <a href="mailto:alisajjad131309188@gmail.com" className="contact-card-link full-span">
                <div className="card-icon-frame" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="card-text-body">
                  <span className="card-label">Email Address</span>
                  <span className="card-data-val">alisajjad131309188@gmail.com</span>
                </div>
              </a>

              {/* 2. Direct Phone Card */}
              <a href="tel:+923073036015" className="contact-card-link">
                <div className="card-icon-frame" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="card-text-body">
                  <span className="card-label">Direct Phone</span>
                  <span className="card-data-val">+92 307 3036015</span>
                </div>
              </a>

              {/* 3. WhatsApp Card */}
              <a 
                href="https://wa.me/923073036015" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card-link"
              >
                <div className="card-icon-frame" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div className="card-text-body">
                  <span className="card-label">WhatsApp</span>
                  <span className="card-data-val">+92 307 3036015</span>
                </div>
              </a>

              {/* 4. Instagram Card */}
              <a 
                href="https://instagram.com/saji_015" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card-link"
              >
                <div className="card-icon-frame" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <div className="card-text-body">
                  <span className="card-label">Instagram</span>
                  <span className="card-data-val">@saji_015</span>
                </div>
              </a>

              {/* 5. LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/sajjadali015" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card-link"
              >
                <div className="card-icon-frame" style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div className="card-text-body">
                  <span className="card-label">LinkedIn</span>
                  <span className="card-data-val">linkedin.com/in/sajjadali015</span>
                </div>
              </a>

              {/* 6. GitHub Card */}
              <a 
                href="https://github.com/sajjadali015" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card-link"
              >
                <div className="card-icon-frame" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </div>
                <div className="card-text-body">
                  <span className="card-label">GitHub</span>
                  <span className="card-data-val">github.com/sajjadali015</span>
                </div>
              </a>

              {/* 7. Engineering Location Card */}
              <div className="contact-card-link">
                <div className="card-icon-frame" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="card-text-body">
                  <span className="card-label">Engineering Location</span>
                  <span className="card-data-val">Karachi, Pakistan</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Start a Project Discovery Form */}
          <div className="contact-form-card">
            {!isSuccess ? (
              <>
                <div className="form-header-block">
                  <h2 className="form-title-h2">Start a Project Discovery</h2>
                  <p className="form-sub-p">Fill out the fields below to schedule an initial technical scoping call.</p>
                </div>

                <form className="contact-form-body" onSubmit={handleSubmit} noValidate>
                  
                  <div className="form-grid-pair">
                    <div className="form-input-group">
                      <label>Full Name <span className="req-star">*</span></label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="e.g. Alex Morgan"
                        className="form-control-input"
                      />
                      {formErrors.name && <span className="input-error-tip">{formErrors.name}</span>}
                    </div>

                    <div className="form-input-group">
                      <label>Email Address <span className="req-star">*</span></label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="alex@company.com"
                        className="form-control-input"
                      />
                      {formErrors.email && <span className="input-error-tip">{formErrors.email}</span>}
                    </div>
                  </div>

                  <div className="form-grid-pair">
                    <div className="form-input-group">
                      <label>Phone Number (Optional)</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="+1 (555) 000-0000"
                        className="form-control-input"
                      />
                    </div>

                    <div className="form-input-group">
                      <label>Company / Organization</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleInputChange} 
                        placeholder="e.g. Acme Innovations"
                        className="form-control-input"
                      />
                    </div>
                  </div>

                  <div className="form-input-group">
                    <label>Service Required</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange}
                      className="form-control-select"
                    >
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Data Analytics">Data Analytics & BI Dashboards</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Cloud & IT Solutions">Cloud & IT Solutions</option>
                      <option value="Other">Other Specialized Architecture</option>
                    </select>
                  </div>

                  <div className="form-input-group">
                    <label>Project Scope & Requirements <span className="req-star">*</span></label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Tell us about your project, timeline, constraints, and objectives..."
                      className="form-control-textarea"
                    />
                    {formErrors.message && <span className="input-error-tip">{formErrors.message}</span>}
                  </div>

                  <button type="submit" className="btn-form-submit">
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" x2="11" y1="2" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>

                </form>
              </>
            ) : (
              <div className="form-success-banner">
                <div className="success-check-badge">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="success-h3">Thank you. Your message has been sent successfully.</h3>
                <p className="success-lead-p">
                  Our engineering team has received your project inquiry. We will review your specifications and reach out to <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="btn-form-submit"
                  style={{ margin: '0 auto' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}