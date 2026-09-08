import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import API_BASE_URL from '../config/api';

export default function AdminDashboard() {
  const [tab, setTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('nexora_token');
  const user = JSON.parse(localStorage.getItem('nexora_user') || '{}');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [tab]);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    const endpoint =
      tab === 'inquiries'
        ? `${API_BASE_URL}/api/contact`
        : `${API_BASE_URL}/api/careers/applications`;

    try {
      const res = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.status === 401 || res.status === 403) {
        handleLogout();
        return;
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch records.');

      if (tab === 'inquiries') {
        setInquiries(data.inquiries || []);
      } else {
        setApplications(data.applications || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus, type) => {
    const endpoint =
      type === 'inquiry'
        ? `${API_BASE_URL}/api/contact/${id}/status`
        : `${API_BASE_URL}/api/careers/applications/${id}/status`;

    try {
      const res = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!res.ok) throw new Error('Status update failed');

      if (type === 'inquiry') {
        setInquiries(prev =>
          prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
        );
      } else {
        setApplications(prev =>
          prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
        );
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm('Are you sure you want to permanently delete this record?')) return;

    const endpoint =
      type === 'inquiry'
        ? `${API_BASE_URL}/api/contact/${id}`
        : `${API_BASE_URL}/api/careers/applications/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error('Failed to delete');

      if (type === 'inquiry') {
        setInquiries(prev => prev.filter(item => item.id !== id));
      } else {
        setApplications(prev => prev.filter(item => item.id !== id));
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('nexora_token');
    localStorage.removeItem('nexora_user');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dash-root">
      <div className="admin-dash-topbar">
        <div>
          <h2>Operational Command</h2>
          <span className="admin-user-label">Logged in as: {user.email} ({user.role})</span>
        </div>
        <button onClick={handleLogout} className="btn-admin-secondary">Sign Out</button>
      </div>

      <div className="admin-dash-tabs">
        <button
          className={`dash-tab ${tab === 'inquiries' ? 'active' : ''}`}
          onClick={() => setTab('inquiries')}
        >
          Contact Inquiries ({inquiries.length})
        </button>
        <button
          className={`dash-tab ${tab === 'applications' ? 'active' : ''}`}
          onClick={() => setTab('applications')}
        >
          Job Candidates ({applications.length})
        </button>
      </div>

      {error && <div className="admin-error-banner">{error}</div>}

      <div className="admin-table-container">
        {loading ? (
          <div className="admin-loading">Loading records from database...</div>
        ) : tab === 'inquiries' ? (
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Client</th>
                <th>Service</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 ? (
                <tr><td colSpan="6" className="text-center">No inquiries logged yet.</td></tr>
              ) : (
                inquiries.map((item) => (
                  <tr key={item.id}>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      <strong>{item.name}</strong>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{item.email}</div>
                    </td>
                    <td><span className="table-badge">{item.service}</span></td>
                    <td className="table-message-cell" title={item.message}>{item.message}</td>
                    <td>
                      <select
                        value={item.status || 'UNREAD'}
                        onChange={(e) => handleStatusChange(item.id, e.target.value, 'inquiry')}
                        className="status-select"
                      >
                        <option value="UNREAD">UNREAD</option>
                        <option value="IN_REVIEW">IN REVIEW</option>
                        <option value="RESOLVED">RESOLVED</option>
                      </select>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item.id, 'inquiry')}
                        className="btn-table-delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        ) : (
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Role</th>
                <th>Applicant</th>
                <th>Resume</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 ? (
                <tr><td colSpan="6" className="text-center">No applications received yet.</td></tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id}>
                    <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                    <td><span className="table-badge">{app.jobTitle}</span></td>
                    <td>
                      <strong>{app.applicantName}</strong>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{app.applicantEmail} • {app.applicantPhone}</div>
                    </td>
                    <td>
                      {app.resumeUrl ? (
                        <a
                          href={`${API_BASE_URL}${app.resumeUrl}`}
                          target="_blank"
                          rel="noreferrer"
                          className="table-download-link"
                        >
                          View Attachment ↗
                        </a>
                      ) : (
                        'No CV'
                      )}
                    </td>
                    <td>
                      <select
                        value={app.status || 'PENDING'}
                        onChange={(e) => handleStatusChange(app.id, e.target.value, 'application')}
                        className="status-select"
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="REVIEWED">REVIEWED</option>
                        <option value="INTERVIEW">INTERVIEW</option>
                        <option value="REJECTED">REJECTED</option>
                      </select>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(app.id, 'application')}
                        className="btn-table-delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}