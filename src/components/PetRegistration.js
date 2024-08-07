import React, { useState } from 'react';

function PetRegistration({ onSave, onCancel }) {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);
  const [rfidTag, setRfidTag] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    if (onSave) onSave({ petName, petType, breed, age, gender, photo, rfidTag, additionalInfo });
  };

  return (
    <div className="pet-registration-container">
      <h2>Register New Pet</h2>
      <form onSubmit={handleSave}>
        <div>
          <label>Pet Name:</label>
          <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
        </div>
        <div>
          <label>Pet Type:</label>
          <input type="text" value={petType} onChange={(e) => setPetType(e.target.value)} />
        </div>
        <div>
          <label>Breed:</label>
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          <label>Gender:</label>
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div>
          <label>Upload Pet Photo:</label>
          <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        </div>
        <div>
          <label>RFID Tag Number:</label>
          <input type="text" value={rfidTag} onChange={(e) => setRfidTag(e.target.value)} />
        </div>
        <div>
          <label>Additional Information:</label>
          <textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default PetRegistration;
