// NotificationCenter.js
import React from 'react';

const NotificationCenter = () => {
  // Mockup data
  const newOrders = 5;
  const newMessages = 3;
  const platformUpdates = [
    'New feature: Product analytics now available!',
    'Upcoming maintenance scheduled for March 15th.',
  ];

  return (
    <div>
      <h2>Notification Center</h2>

      <div>
        <h3>New Orders</h3>
        <p>You have {newOrders} new orders to process.</p>
        <a href="/order-management">View Orders</a>
      </div>

      <div>
        <h3>New Messages</h3>
        <p>You have {newMessages} new messages from customers.</p>
        <a href="/communication-center">View Messages</a>
      </div>

      <div>
        <h3>Platform Updates</h3>
        <ul>
          {platformUpdates.map((update, index) => (
            <li key={index}>{update}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationCenter;
