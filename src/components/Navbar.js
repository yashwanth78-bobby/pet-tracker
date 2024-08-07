// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; // Import the updated CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">SignOut</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
