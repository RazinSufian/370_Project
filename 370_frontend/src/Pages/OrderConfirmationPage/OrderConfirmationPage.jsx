// Import necessary React components and styling
import React from 'react';
import './OrderConfirmationPage.css'; // Import your stylesheet

const OrderConfirmationPage = () => {
  // Mockup data for order details
  const orderDetails = {
    orderId: 'ABC123',
    totalAmount: 189.97,
    paymentMethod: 'Credit Card',
    shippingAddress: '123 Main St, Cityville, 12345, Countryland',
  };

  return (
    <div className="order-confirmation-page">
      <h2>Order Confirmation</h2>

      <div className="confirmation-details">
        <p>Your order has been placed successfully!</p>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Order ID: {orderDetails.orderId}</p>
          <p>Total Amount: ${orderDetails.totalAmount.toFixed(2)}</p>
          <p>Payment Method: {orderDetails.paymentMethod}</p>
          <p>Shipping Address: {orderDetails.shippingAddress}</p>
        </div>
      </div>

      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default OrderConfirmationPage;
