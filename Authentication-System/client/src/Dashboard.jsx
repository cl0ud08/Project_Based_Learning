import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Your role is: {role}</p>
      {role === 'admin' ? (
        <p>This is admin-only content.</p>
      ) : (
        <p>This is user content.</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
