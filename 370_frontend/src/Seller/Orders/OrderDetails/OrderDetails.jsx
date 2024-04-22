// OrderDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for navigation

const OrderDetails
 = () => {
  const { orderId } = useParams(); // Get the orderId from the URL parameter
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Fetch order details from your backend API using the orderId
    // Example: Fetch order details using axios or fetch API
    // const fetchData = async () => {
    //   const response = await fetch(`your_backend_api/orders/${orderId}`);
    //   const data = await response.json();
    //   setOrderDetails(data);
    // };
    // fetchData();

    // For now, using mock data for demonstration
    const mockOrderDetails = {
      orderId: 1,
      productName: 'Running Shoes',
      quantity: 2,
      totalAmount: '$179.98',
      orderDate: '2024-03-06',
      status: 'Shipped',
      shippingAddress: '123 Main St, Cityville, State, 12345',
      paymentMethod: 'Credit Card',
      // Add more details as needed
    };
    setOrderDetails(mockOrderDetails);
  }, [orderId]);

  return (
    <div className="order-details-container">
      <h2>Order Details - Order #{orderId}</h2>
      {orderDetails ? (
        <div className="order-details">
          <p>Product Name: {orderDetails.productName}</p>
          <p>Quantity: {orderDetails.quantity}</p>
          <p>Total Amount: {orderDetails.totalAmount}</p>
          <p>Order Date: {orderDetails.orderDate}</p>
          <p>Status: {orderDetails.status}</p>
          <p>Shipping Address: {orderDetails.shippingAddress}</p>
          <p>Payment Method: {orderDetails.paymentMethod}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderDetails
;
