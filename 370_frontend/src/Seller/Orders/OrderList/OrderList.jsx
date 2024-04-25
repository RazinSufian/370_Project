import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetOrdersByShopIdQuery } from '../../../features/order/orderAPI';
// import { useGetOrdersByShopIdQuery } from '../../features/orders/orderAPI';

const OrderList = () => {
  // const { shopId } = useParams();
  const shop_id = localStorage.getItem('shop_id');
  const { data, error, isLoading } = useGetOrdersByShopIdQuery(shop_id, { skip: !shop_id });
  console.log(data)
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Orders for Shop {shop_id}</h1>
      {orders.length === 0 ? (
        <p>No orders found for this shop.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Product ID</th>
              <th>Payment Method</th>
              <th>Billing Address</th>
              <th>Delivery Time</th>
              <th>Payment Status</th>
              <th>Shipment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.customer_id}</td>
                <td>{order.product_id}</td>
                <td>{order.payment_method}</td>
                <td>{order.billing_address}</td>
                <td>{order.delivery_time}</td>
                <td>{order.payment_status}</td>
                <td>{order.shipment_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderList;