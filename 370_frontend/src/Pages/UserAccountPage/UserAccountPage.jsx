// Import necessary React components and styling
import React from 'react';
import './UserAccountPage.css'; // Import your stylesheet

// Mockup data for user profile and order history
const userProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

const orderHistory = [
  {
    orderId: 'ABC123',
    date: '2024-03-15',
    totalAmount: 89.99,
    status: 'Shipped',
  },
  {
    orderId: 'DEF456',
    date: '2024-03-10',
    totalAmount: 99.99,
    status: 'Delivered',
  },
  // Add more order history as needed
];

const UserAccountPage = () => {
  return (
    <div className="user-account-page">
      <h2>User Account</h2>

      <div className="user-profile">
        <h3>Profile Information</h3>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <button>Edit Profile</button>
      </div>

      <div className="order-history">
        <h3>Order History</h3>
        {orderHistory.map((order) => (
          <div key={order.orderId} className="order">
            <p>Order ID: {order.orderId}</p>
            <p>Date: {order.date}</p>
            <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <p>Status: {order.status}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>

      <div className="saved-info">
        <h3>Saved Information</h3>
        <div className="saved-addresses">
          <h4>Saved Addresses</h4>
          <ul>
            <li>123 Main St, Cityville, 12345, Countryland</li>
            <li>456 Oak Ave, Townsville, 56789, Stateland</li>
          </ul>
          <button>Add New Address</button>
        </div>
        <div className="saved-payment-methods">
          <h4>Saved Payment Methods</h4>
          <ul>
            <li>Visa ending in **** 1234</li>
            <li>MasterCard ending in **** 5678</li>
          </ul>
          <button>Add New Payment Method</button>
        </div>
      </div>
    </div>
  );
};

export default UserAccountPage;
