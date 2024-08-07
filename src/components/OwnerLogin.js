// src/components/OwnerLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OwnerLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Owner logged in');
    onLogin();
    navigate('/owner-dashboard'); // Redirect to the owner dashboard after login
  };

  return (
    <div className="login-container">
      <h2>Owner Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default OwnerLogin;
