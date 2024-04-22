// AnalyticsAndReports.js
import React from 'react';

const AnalyticsAndReports = () => {
  // Mockup data
  const totalSales = 150;
  const totalCustomers = 100;
  const popularProducts = [
    { id: 1, name: 'Classic Sneakers', sales: 50 },
    // Add more mockup data as needed
  ];

  return (
    <div>
      <h2>Analytics and Reports</h2>

      <div>
        <h3>Sales Overview</h3>
        <p>Total Sales: ${totalSales}</p>
        <p>Total Customers: {totalCustomers}</p>
      </div>

      <div>
        <h3>Popular Products</h3>
        <ul>
          {popularProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.sales} units sold
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsAndReports;
