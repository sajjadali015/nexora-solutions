import React, { useState } from 'react';
import './Careers.css';
import API_BASE_URL from '../config/api';

const OPEN_POSITIONS = [
  {
    id: 'fullstack-dev',
    title: 'Senior Full-Stack Engineer',
    department: 'Software Engineering',
    type: 'Full-Time',
    location: 'Remote / Hybrid (Karachi, PK)',
    description: 'Lead engineering sprints, build scalable microservices in Node.js, and deliver dynamic responsive frontends using React and modern component frameworks.'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst & BI Specialist',
    department: 'Data & Analytics',
    type: 'Full-Time',
    location: 'Remote',
    description: 'Transform complex database tables into high-impact Power BI and Tableau dashboards. Build clean data pipelines and SQL queries for client analytics.'
  },
  {
    id: 'ui-ux-architect',
    title: 'Product Designer (UI/UX)',
    department: 'Creative Design',
    type: 'Full-Time',
    location: 'Remote',
    description: 'Architect modern design systems, create production wireframes in Figma, and ensure pixel-perfect fidelity across responsive web and mobile viewports.'
  }
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openApplicationModal = (role) => {
    setSelectedRole(role);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setResumeFile(null);
    setFormErrors({});
    setServerMessage(null);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setIsSubmitted(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedExtensions = ['pdf', 'doc', 'docx'];
      const fileExt = file.name.split('.').pop().toLowerCase();

      if (!allowedExtensions.includes(fileExt)) {
        setFormErrors(prev => ({ ...prev, resume: 'Only .pdf, .doc, or .docx files are permitted.' }));
        setResumeFile(null);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, resume: 'File size must not exceed 5MB.' }));
        setResumeFile(null);
        return;
      }

      setResumeFile(file);
      setFormErrors(prev => ({ ...prev, resume: null }));
    }
  };

  const validateApplication = () => {
    const errors = {};
    if (!applicantName.trim()) errors.name = 'Full name is required.';
    if (!applicantEmail.trim() || !/\S+@\S+\.\S+/.test(applicantEmail)) {
      errors.email = 'Valid email is required.';
    }
    if (!applicantPhone.trim()) errors.phone = 'Phone number is required.';
    if (!resumeFile) errors.resume = 'Please attach your CV / Resume document.';
    return errors;
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    const errors = validateApplication();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setServerMessage(null);

    const formData = new FormData();
    formData.append('jobTitle', selectedRole.title);
    formData.append('applicantName', applicantName);
    formData.append('applicantEmail', applicantEmail);
    formData.append('applicantPhone', applicantPhone);
    formData.append('resume', resumeFile);

    try {
      const response = await fetch(`${API_BASE_URL}/api/careers/apply`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setServerMessage(err.message || 'Server connection error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="careers-page-root">
      <div className="careers-bounds">
        
        {/* Careers Header */}
        <div className="careers-header-section">
          <span className="careers-pill">Nexora Careers</span>
          <h1 className="careers-h1">Build Next-Generation Digital Systems With Us</h1>
          <p className="careers-lead-desc">
            We are looking for engineers, data analysts, and designers dedicated to engineering clean, reliable solutions for clients worldwide.
          </p>
        </div>

        {/* Positions List */}
        <div className="positions-grid">
          {OPEN_POSITIONS.map(job => (
            <div key={job.id} className="position-card">
              <div className="position-meta-top">
                <span className="position-tag-dept">{job.department}</span>
                <span className="position-tag-type">{job.type}</span>
              </div>
              <h2 className="position-title">{job.title}</h2>
              <span className="position-loc">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {job.location}
              </span>
              <p className="position-desc">{job.description}</p>
              <button 
                type="button" 
                onClick={() => openApplicationModal(job)} 
                className="btn-apply-action"
              >
                Apply for Position
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Application Modal Popup */}
      {selectedRole && (
        <div className="modal-backdrop">
          <div className="modal-container">
            <button className="modal-close-btn" onClick={closeModal}>✕</button>

            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <span className="modal-badge">{selectedRole.department}</span>
                  <h3 className="modal-title">Apply: {selectedRole.title}</h3>
                  <p className="modal-subtitle">Submit your profile to join our engineering crew.</p>
                </div>

                {serverMessage && (
                  <div className="modal-alert-error">{serverMessage}</div>
                )}

                <form onSubmit={handleApplicationSubmit} className="modal-form" noValidate>
                  <div className="form-input-group">
                    <label>Full Name <span className="req-star">*</span></label>
                    <input 
                      type="text" 
                      value={applicantName} 
                      onChange={(e) => setApplicantName(e.target.value)} 
                      placeholder="e.g. Sajjad Ali"
                      className="form-control-input"
                    />
                    {formErrors.name && <span className="input-error-tip">{formErrors.name}</span>}
                  </div>

                  <div className="form-input-group">
                    <label>Email Address <span className="req-star">*</span></label>
                    <input 
                      type="email" 
                      value={applicantEmail} 
                      onChange={(e) => setApplicantEmail(e.target.value)} 
                      placeholder="sajjad@example.com"
                      className="form-control-input"
                    />
                    {formErrors.email && <span className="input-error-tip">{formErrors.email}</span>}
                  </div>

                  <div className="form-input-group">
                    <label>Phone Number <span className="req-star">*</span></label>
                    <input 
                      type="tel" 
                      value={applicantPhone} 
                      onChange={(e) => setApplicantPhone(e.target.value)} 
                      placeholder="+92 300 0000000"
                      className="form-control-input"
                    />
                    {formErrors.phone && <span className="input-error-tip">{formErrors.phone}</span>}
                  </div>

                  <div className="form-input-group">
                    <label>Upload CV / Resume (.pdf, .docx, max 5MB) <span className="req-star">*</span></label>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileChange}
                      className="form-control-file"
                    />
                    {formErrors.resume && <span className="input-error-tip">{formErrors.resume}</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn-modal-submit"
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Send Application'}
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success-card">
                <div className="success-badge">✓</div>
                <h3>Application Successfully Transmitted!</h3>
                <p>
                  Thank you for applying for the <strong>{selectedRole.title}</strong> role. Our hiring team will review your CV and reply directly to <strong>{applicantEmail}</strong>.
                </p>
                <button onClick={closeModal} className="btn-modal-submit">Done</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}