// PaymentSettings.js
import React, { useState } from 'react';

const PaymentSettings = () => {
  // Mockup data
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      method: 'Credit Card',
      lastFourDigits: '**** 1234',
    },
    // Add more mockup data as needed
  ]);

  // Function to add a new payment method
  const addPaymentMethod = (newMethod) => {
    const newPaymentMethod = {
      id: paymentMethods.length + 1,
      method: newMethod,
      lastFourDigits: '**** ' + Math.floor(Math.random() * 10000).toString(),
    };
    setPaymentMethods((prevMethods) => [...prevMethods, newPaymentMethod]);
  };

  // Function to remove a payment method
  const removePaymentMethod = (id) => {
    setPaymentMethods((prevMethods) => prevMethods.filter((method) => method.id !== id));
  };

  return (
    <div>
      <h2>Payment Settings</h2>

      <ul>
        {paymentMethods.map((method) => (
          <li key={method.id}>
            {method.method} - {method.lastFourDigits}
            <button onClick={() => removePaymentMethod(method.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <label>Add New Payment Method:</label>
        <input type="text" placeholder="Enter payment method" />
        <button onClick={() => addPaymentMethod('New Method')}>Add</button>
      </div>
    </div>
  );
};

export default PaymentSettings;
