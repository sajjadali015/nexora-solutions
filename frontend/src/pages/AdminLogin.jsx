import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import API_BASE_URL from '../config/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed.');
      }

      localStorage.setItem('nexora_token', data.token);
      localStorage.setItem('nexora_user', JSON.stringify(data.user));
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-canvas">
      <div className="admin-login-card">
        <div className="admin-card-header">
          <span className="admin-badge">Internal Access</span>
          <h1>Staff Gateway</h1>
          <p>Sign in to access the Nexora management console.</p>
        </div>

        {error && <div className="admin-error-banner">{error}</div>}

        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="admin-field">
            <label>Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@nexorasolutions.com"
              required
            />
          </div>

          <div className="admin-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
            />
          </div>

          <button type="submit" disabled={loading} className="btn-admin-primary">
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>
      </div>
    </div>
  );
}