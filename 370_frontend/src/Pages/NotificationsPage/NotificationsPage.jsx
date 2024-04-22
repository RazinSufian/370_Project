// Import necessary React components and styling
import React, { useState } from 'react';
import './NotificationsPage.css'; // Import your stylesheet

const NotificationsPage = () => {
  // Mockup data for notification preferences
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  // Event handler for updating email notification preference
  const handleEmailToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  // Event handler for updating push notification preference
  const handlePushToggle = () => {
    setPushNotifications(!pushNotifications);
  };

  return (
    <div className="notifications-page">
      <h2>Notification Preferences</h2>

      <div className="notification-options">
        <div className="notification-option">
          <label>Email Notifications</label>
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={handleEmailToggle}
          />
        </div>

        <div className="notification-option">
          <label>Push Notifications</label>
          <input
            type="checkbox"
            id="pushNotifications"
            checked={pushNotifications}
            onChange={handlePushToggle}
          />
        </div>
      </div>

      <p>
        By enabling notifications, you'll receive updates on promotions, new arrivals, and more.
      </p>
    </div>
  );
};

export default NotificationsPage;
