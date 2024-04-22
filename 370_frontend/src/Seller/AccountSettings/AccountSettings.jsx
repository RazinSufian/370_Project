// AccountSettings.js
import React, { useState } from 'react';

const AccountSettings = () => {
  // Mockup data
  const [accountDetails, setAccountDetails] = useState({
    username: 'Seller123',
    email: 'seller123@example.com',
    phoneNumber: '123-456-7890',
  });

  // Function to handle updating account details
  const updateAccountDetails = (newDetails) => {
    setAccountDetails((prevDetails) => ({ ...prevDetails, ...newDetails }));
  };

  return (
    <div>
      <h2>Account Settings</h2>

      <div>
        <label>Username:</label>
        <p>{accountDetails.username}</p>
      </div>

      <div>
        <label>Email:</label>
        <p>{accountDetails.email}</p>
      </div>

      <div>
        <label>Phone Number:</label>
        <p>{accountDetails.phoneNumber}</p>
      </div>

      <div>
        <label>Change Password:</label>
        <input type="password" placeholder="Enter new password" />
      </div>

      <button onClick={() => updateAccountDetails({ phoneNumber: '987-654-3210' })}>
        Update Phone Number
      </button>
    </div>
  );
};

export default AccountSettings;

