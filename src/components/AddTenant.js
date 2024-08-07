// src/components/AddTenant.js
import React, { useState } from 'react';

function AddTenant({ onSave, onCancel }) {
  const [tenantName, setTenantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const newTenant = {
      id: Date.now(), // Generate a unique id
      name: tenantName,
      email,
      phone,
    };
    onSave(newTenant);
  };

  return (
    <div className="add-tenant-container">
      <h2>Add Tenant</h2>
      <form onSubmit={handleAdd}>
        <label>Tenant Name:</label>
        <input type="text" value={tenantName} onChange={(e) => setTenantName(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <div className="buttons">
          <button type="submit">Add Tenant</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddTenant;
