// OrderList.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  // Mock-up data for order list
  const mockOrders = [
    {
      orderId: 1,
      productName: 'Running Shoes',
      quantity: 2,
      totalAmount: '$179.98',
      orderDate: '2024-03-06',
      status: 'Shipped',
    },
    {
      orderId: 2,
      productName: 'Casual Sneakers',
      quantity: 1,
      totalAmount: '$49.99',
      orderDate: '2024-03-07',
      status: 'Processing',
    },
    // Add more mock orders as needed
  ];

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch orders from your backend API and update the state
    // Example: Fetch orders using axios or fetch API
    // const fetchData = async () => {
    //   const response = await fetch('your_backend_api/orders');
    //   const data = await response.json();
    //   setOrders(data);
    // };
    // fetchData();

    // For now, using mock data for demonstration
    setOrders(mockOrders);
  }, []);

  const handleDetailPage =(id)=>{
    navigate(`/seller/order-details/${id}`)
  }

  return (
    <div className="view-orders-container">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.totalAmount}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td><button onClick={()=>handleDetailPage(order.orderId)}>Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderList;
