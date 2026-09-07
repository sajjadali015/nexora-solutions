import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <Link to="/" style={{ color: '#2563eb' }}>Return Home</Link>
    </div>
  );
}