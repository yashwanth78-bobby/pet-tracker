// src/components/Notifications.js
import React from 'react';
import '../Notifications.css';
function Notifications() {
  const notifications  = [
    { id: 1, message: 'Your profile was updated successfully.' },
    { id: 2, message: 'You have a new message from support.' },
    { id: 3, message: 'System maintenance is scheduled for tonight.' },
  ];
  
  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.map(notification => (
        <div key={notification.id} className="notification">
          {notification.message}
        </div>
      ))}
    </div>
  );
}

export default Notifications;
