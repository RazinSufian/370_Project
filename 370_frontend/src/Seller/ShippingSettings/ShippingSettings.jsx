// ShippingSettings.js
import React, { useState } from 'react';

const ShippingSettings = () => {
  // Mockup data
  const [shippingOptions, setShippingOptions] = useState([
    {
      id: 1,
      option: 'Standard Shipping',
      rate: 5.99,
      estimatedDelivery: '3-5 business days',
    },
    // Add more mockup data as needed
  ]);

  // Function to add a new shipping option
  const addShippingOption = (newOption, newRate, newDelivery) => {
    const newShippingOption = {
      id: shippingOptions.length + 1,
      option: newOption,
      rate: newRate,
      estimatedDelivery: newDelivery,
    };
    setShippingOptions((prevOptions) => [...prevOptions, newShippingOption]);
  };

  // Function to remove a shipping option
  const removeShippingOption = (id) => {
    setShippingOptions((prevOptions) => prevOptions.filter((option) => option.id !== id));
  };

  return (
    <div>
      <h2>Shipping Settings</h2>

      <ul>
        {shippingOptions.map((option) => (
          <li key={option.id}>
            {option.option} - ${option.rate} - {option.estimatedDelivery}
            <button onClick={() => removeShippingOption(option.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <label>Add New Shipping Option:</label>
        <input type="text" placeholder="Shipping Option" />
        <input type="number" placeholder="Shipping Rate" step="0.01" />
        <input type="text" placeholder="Estimated Delivery Time" />
        <button onClick={() => addShippingOption('New Option', 9.99, '2-3 business days')}>Add</button>
      </div>
    </div>
  );
};

export default ShippingSettings;
