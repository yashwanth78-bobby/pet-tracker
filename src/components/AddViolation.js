// src/components/AddViolation.js
import React, { useState } from 'react';

function AddViolation({ onSave, onCancel }) {
  const [tenantName, setTenantName] = useState('');
  const [violationDescription, setViolationDescription] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    // Handle add violation logic
    if (onSave) {
      onSave({ tenantName, description: violationDescription });
    }
  };

  return (
    <div className="add-violation-container">
      <h2>Add Violation</h2>
      <form onSubmit={handleAdd}>
        <label>Tenant Name:</label>
        <input type="text" value={tenantName} onChange={(e) => setTenantName(e.target.value)} />
        <label>Violation Description:</label>
        <input type="text" value={violationDescription} onChange={(e) => setViolationDescription(e.target.value)} />
        <button type="submit">Add Violation</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default AddViolation;
