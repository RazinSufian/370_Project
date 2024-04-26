// SellerDashboard.js
import React from 'react';
import ShopManagement from '../ShopManagement/ShopManagement';
import ProductListings from '../ProductListings/ProductListings';
import InventoryManagement from '../InventoryManagement/InventoryManagement';
import OrderList from '../Orders/OrderList/OrderList';
// import ShopManagement from './ShopManagement';
// import ProductListings from './ProductListings';
// import InventoryManagement from './InventoryManagement';
// import OrderManagement from './OrderManagement';

const SellerDashboard = () => {
  // Mockup data
  // const shopName = "Shoe Haven";
  // const totalSales = 150;
  // const totalProducts = 50;

  return (
    <div>
      {/* <h1>Welcome to Seller Dashboard</h1> */}
      
      {/* <div>
        <h2>Shop Overview</h2>
        <p>Total Sales: ${totalSales}</p>
        <p>Total Products: {totalProducts}</p>
      </div> */}
{/* 
      <ShopManagement />
      <ProductListings />
      <InventoryManagement /> */}
      <OrderList />

      {/* Add more components for other sections */}

    </div>
  );
}

export default SellerDashboard;
