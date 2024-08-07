import React, { useState } from 'react';
// import './AccountSettings.css'; // Import the CSS file for styling

function AccountSettings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic
    console.log('Changes saved');
  };

  const handleCancel = () => {
    // Handle cancel logic
    console.log('Changes canceled');
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <button type="button" className="change-password-button" onClick={() => alert('Change Password logic here')}>Change Password</button>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button">Save Changes</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AccountSettings;
