// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TenantLogin from './components/TenantLogin';
import OwnerLogin from './components/OwnerLogin';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import OwnerDashboard from './components/OwnerDashboard';
import Notifications from './components/Notifications';
import ViewViolations from './components/ViewViolations';
import PetRegistration from './components/PetRegistration';
import AddTenant from './components/AddTenant'; // Assume this component exists
import HomePetPage from './components/HomePetPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tenantName, setTenantName] = useState('John Doe');
  const [petCount, setPetCount] = useState(2);
  const [violationCount, setViolationCount] = useState(1);
  const [violations, setViolations] = useState([{ id: 1, description: 'Violation 1' }]); // Example violations
  const [notifications, setNotifications] = useState([{ id: 1, message: 'Notification 1' }]); // Example notifications
  const [tenants, setTenants] = useState([{ id: 1, name: 'Tenant 1' }]); // Example tenants
  const dummyNotifications = [
    { id: 1, message: 'Your profile was updated successfully.' },
    { id: 2, message: 'You have a new message from support.' },
    { id: 3, message: 'System maintenance is scheduled for tonight.' },
  ];
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    // Perform registration logic
    setIsLoggedIn(true); // Assume registration logs the user in
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePetPage />} />
        <Route path="/admin/login" element={<AdminLogin onLogin={handleLogin} />} />
        <Route path="/owner/login" element={<OwnerLogin onLogin={handleLogin} />} />
        <Route path="/tenant/login" element={<TenantLogin onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? 
          <Dashboard 
            tenantName={tenantName} 
            petCount={petCount} 
            violationCount={violationCount} 
            violations={violations} 
            notifications={notifications} 
          /> 
          : <Navigate to="/" />} 
        />
        <Route path="/owner-dashboard" element={isLoggedIn ? 
          <OwnerDashboard 
            violations={violations} 
            tenants={tenants} 
          /> 
          : <Navigate to="/" />} 
        />
        <Route path="/notifications" element={isLoggedIn ? <Notifications notifications={notifications} /> : <Navigate to="/" />} />
        <Route path="/view-violations" element={isLoggedIn ? <ViewViolations violations={violations} /> : <Navigate to="/" />} />
        <Route path="/register-pet" element={isLoggedIn ? <PetRegistration /> : <Navigate to="/" />} />
        <Route path="/add-tenant" element={isLoggedIn ? <AddTenant /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
