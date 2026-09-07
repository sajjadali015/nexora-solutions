import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!credentials.username.trim() || !credentials.password.trim()) {
      setErrorMessage('Please enter both your staff ID and password.');
      return;
    }

    setIsLoading(true);
    // Simulated administrative authentication delay
    setTimeout(() => {
      setIsLoading(false);
      setErrorMessage('Staff access is restricted to verified administrators during public portfolio preview.');
    }, 800);
  };

  return (
    <div className="login-page-container">
      <div className="login-card-box">
        
        {/* Header */}
        <div className="login-header">
          <div className="login-logo-mark">N</div>
          <h2 className="login-title">Nexora Staff Portal</h2>
          <p className="login-desc">Internal access for project dispatch, telemetry logs, and client inquiry reviews.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="login-form">
          {errorMessage && (
            <div className="login-alert-banner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="login-input-group">
            <label>Staff Username or ID</label>
            <input 
              type="text" 
              name="username"
              placeholder="e.g. admin@nexora.internal"
              value={credentials.username}
              onChange={handleChange}
              className="login-input"
            />
          </div>

          <div className="login-input-group">
            <label>Security Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="••••••••••••"
              value={credentials.password}
              onChange={handleChange}
              className="login-input"
            />
          </div>

          <button type="submit" className="btn-login-submit" disabled={isLoading}>
            {isLoading ? 'Verifying Credentials...' : 'Authenticate Portal Session →'}
          </button>
        </form>

        <div className="login-footer-hint">
          <span>Public portfolio demonstration mode.</span>
          <Link to="/" className="back-to-site-link">Return to Homepage</Link>
        </div>

      </div>
    </div>
  );
}