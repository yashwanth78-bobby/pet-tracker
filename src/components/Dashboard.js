import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewViolations from '../components/ViewViolations';
import Notifications from '../components/Notifications';
import PetRegistration from '../components/PetRegistration';
import AccountSettings from '../components/AccountSettings';
import Navbar from './Navbar';
function Dashboard({ tenantName, petCount, violationCount }) {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showViolations, setShowViolations] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [pets, setPets] = useState([]); // State to manage pets
  const [violations, setViolations] = useState([]);
  const navigate = useNavigate();

  const handleRegisterNewPet = () => {
    setShowRegistration(true); // Open the registration form
  };

  const handleSavePet = (newPet) => {
    setPets([...pets, newPet]); // Add new pet to the list
    setShowRegistration(false); // Close registration form
  };

  const handleCancelRegistration = () => {
    setShowRegistration(false); // Close registration form without saving
  };

  const handleSave = () => {
    // Handle save logic if needed
    setShowRegistration(false);
  };

  const handleCancel = () => {
    // Handle cancel logic if needed
    setShowRegistration(false);
  };

  return (<><Navbar />
    <div className="dashboard-container">
      
      <h2>Welcome, {tenantName}</h2>
      <div className="info">
        <p>Registered Pets: {pets.length}</p> {/* Display pet count */}
        <p>Violations: {violationCount}</p>
      </div>
      <div className="actions">
        <button type="button" onClick={handleRegisterNewPet}>Register New Pet</button>
        <button type="button" onClick={() => navigate('/notifications')}>View Notifications</button>
        <button type="button" onClick={() => navigate('/view-violations')}>View Violations</button>
        <button type="button" onClick={() => setShowSettings(true)}>Account Settings</button>
      </div>
      {showRegistration && (
        <PetRegistration onSave={handleSavePet} onCancel={handleCancelRegistration} />
      )}
      {showViolations && (
        <ViewViolations violations={violations} />
      )}
      {showSettings && (
        <AccountSettings />
      )}
      <div className="pet-list">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <h3>{pet.petName}</h3>
            <p><strong>Type:</strong> {pet.petType}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Age:</strong> {pet.age}</p>
            <p><strong>Gender:</strong> {pet.gender}</p>
            {pet.photo && <img src={URL.createObjectURL(pet.photo)} alt={pet.petName} className="pet-photo" />}
            <p><strong>RFID Tag:</strong> {pet.rfidTag}</p>
            <p><strong>Additional Info:</strong> {pet.additionalInfo}</p>
          </div>
        ))}
      </div>
    </div></>
  );
}

export default Dashboard;
