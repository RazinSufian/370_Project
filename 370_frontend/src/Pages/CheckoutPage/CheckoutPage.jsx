// Import necessary React components and styling
import React, { useState } from 'react';
import './CheckoutPage.css'; // Import your stylesheet

const CheckoutPage = () => {
  // Mockup data for billing and shipping information
  const [billingInfo, setBillingInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St',
    city: 'Cityville',
    zipCode: '12345',
    country: 'Countryland',
  });

  // Mockup data for payment options
  const paymentOptions = ['Credit Card', 'PayPal', 'Stripe'];

  // Event handler for updating billing information
  const handleBillingInfoChange = (field, value) => {
    setBillingInfo({ ...billingInfo, [field]: value });
  };

  // Event handler for submitting the order
  const handleOrderSubmit = () => {
    // Implement order submission logic here
    console.log('Order submitted:', billingInfo);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="billing-info">
        <h3>Billing Information</h3>
        <form>
          <label>Name:</label>
          <input
            type="text"
            value={billingInfo.name}
            onChange={(e) => handleBillingInfoChange('name', e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            value={billingInfo.email}
            onChange={(e) => handleBillingInfoChange('email', e.target.value)}
          />

          <label>Address:</label>
          <input
            type="text"
            value={billingInfo.address}
            onChange={(e) => handleBillingInfoChange('address', e.target.value)}
          />

          <label>City:</label>
          <input
            type="text"
            value={billingInfo.city}
            onChange={(e) => handleBillingInfoChange('city', e.target.value)}
          />

          <label>Zip Code:</label>
          <input
            type="text"
            value={billingInfo.zipCode}
            onChange={(e) => handleBillingInfoChange('zipCode', e.target.value)}
          />

          <label>Country:</label>
          <input
            type="text"
            value={billingInfo.country}
            onChange={(e) => handleBillingInfoChange('country', e.target.value)}
          />
        </form>
      </div>

      <div className="payment-options">
        <h3>Payment Options</h3>
        <div>
          {paymentOptions.map((option) => (
            <div key={option}>
              <input type="radio" id={option} name="paymentOption" />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleOrderSubmit}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
