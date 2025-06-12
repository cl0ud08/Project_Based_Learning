// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
