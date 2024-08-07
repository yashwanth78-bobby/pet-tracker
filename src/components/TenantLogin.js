// src/components/TenantLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TenantLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Tenant logged in');
    onLogin();
    navigate('/dashboard'); // Redirect to the dashboard after login
  };

  return (
    <div className="login-container">
      <h2>Tenant Login</h2>
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

export default TenantLogin;
