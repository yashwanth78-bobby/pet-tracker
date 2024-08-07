// src/components/OwnerDashboard.js
import React, { useState } from 'react';
import AddTenant from './AddTenant';
import AddViolation from './AddViolation'; // Import the AddViolation component


function OwnerDashboard() {
  const [violations, setViolations] = useState([
    { id: 1, tenantName: 'John Doe', description: 'Noise complaint from unit 3A' },
    { id: 2, tenantName: 'Jane Smith', description: 'Unauthorized pet in unit 2B' },
    { id: 3, tenantName: 'Alice Johnson', description: 'Parking violation in lot C' },
  ]);

  const [tenants, setTenants] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ]);

  const [showAddTenant, setShowAddTenant] = useState(false);
  const [showAddViolation, setShowAddViolation] = useState(false);

  const handleAddTenant = () => {
    setShowAddTenant(true);
    setShowAddViolation(false);
  };

  const handleAddViolation = () => {
    setShowAddViolation(true);
    setShowAddTenant(false);
  };

  const handleSaveTenant = (newTenant) => {
    setTenants([...tenants, newTenant]);
    setShowAddTenant(false);
  };

  const handleCancelAddTenant = () => {
    setShowAddTenant(false);
  };

  const handleSaveViolation = (newViolation) => {
    setViolations([...violations, { id: violations.length + 1, ...newViolation }]);
    setShowAddViolation(false);
  };

  const handleCancelAddViolation = () => {
    setShowAddViolation(false);
  };

  return (
    <div className="dashboard-container">
      <h2>Owner Dashboard</h2>
      <div className="actions">
        <button type="button" onClick={handleAddViolation}>Add Violation</button>
        <button type="button" onClick={handleAddTenant}>Add Tenant</button>
      </div>
      {showAddTenant ? (
        <AddTenant onSave={handleSaveTenant} onCancel={handleCancelAddTenant} />
      ) : showAddViolation ? (
        <AddViolation onSave={handleSaveViolation} onCancel={handleCancelAddViolation} />
      ) : (
        <div className="data-section">
          <div className="data-column">
            <h3>Violations</h3>
            {violations.map((violation) => (
              <div key={violation.id} className="card">
                <h4>Violation</h4>
                <p><strong>Tenant:</strong> {violation.tenantName}</p>
                <p>{violation.description}</p>
              </div>
            ))}
          </div>
          <div className="data-column">
            <h3>Tenants</h3>
            {tenants.map((tenant) => (
              <div key={tenant.id} className="card">
                <h4>Tenant</h4>
                <p>{tenant.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerDashboard;
