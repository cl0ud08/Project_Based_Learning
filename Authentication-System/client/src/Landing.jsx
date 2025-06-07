// src/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to the Auth System</h1>
      <p>Secure login and role-based access using JWT.</p>
      <div className="landing-buttons">
        <Link to="/signup" className="btn">Sign Up</Link>
        <Link to="/login" className="btn btn-outline">Log In</Link>
      </div>
    </div>
  );
}
