// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/${role.toLowerCase()}/login`);
  };

  return (
    <div className="home-container">
      <h1>Select Your Role</h1>
      <div className="role-selection">
        <button onClick={() => handleRoleSelection('Admin')}>Admin</button>
        <button onClick={() => handleRoleSelection('Owner')}>Owner</button>
        <button onClick={() => handleRoleSelection('Tenant')}>Tenant</button>
      </div>
    </div>
  );
}

export default Home;
