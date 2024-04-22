// SellerNav.js

import React, { useState } from 'react';
import './SellerNav.css';
import { Link } from 'react-router-dom';

const SellerNav = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={`SellerNav ${isNavOpen ? 'open' : ''}`}>
      <div className="SellerNav-container">
        <div className="logo">Your Logo</div>
        <div className={`SellerNav-links ${isNavOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="profile">Profile</Link>
          <Link to="shop">Shop</Link>
          <Link to="products">Products</Link>
          <Link to="/seller/dashboard">Dashboard</Link>
          <Link to="/seller/shop-management">Shop Management</Link>
          <Link to="/seller/product-listings">Product Listings</Link>
          <Link to="/seller/inventory-management">Inventory Management</Link>
          <Link to="/seller/order-management">Order Management</Link>
          <Link to="/seller/payment-settings">Payment Settings</Link>
          <Link to="/seller/shipping-settings">Shipping Settings</Link>
          <Link to="/seller/promotions-and-discounts">Promotions & Discounts</Link>
          <Link to="/seller/communication-center">Communication Center</Link>
          <Link to="/seller/analytics-and-reports">Analytics & Reports</Link>
          <Link to="/seller/account-settings">Account Settings</Link>
          <Link to="/seller/terms-and-policies">Terms & Policies</Link>
          <Link to="/seller/support-and-help-center">Support & Help Center</Link>
          <Link to="/seller/notification-center">Notification Center</Link>
          <Link to="/seller/feedback-and-ratings">Feedback & Ratings</Link>
          <button>
          <Link to="add-product">Add Product</Link>
          </button>    
        </div>
        <div className="toggle-btn" onClick={toggleNav}>
          <div className={`bar ${isNavOpen ? 'open' : ''}`} />
          <div className={`bar ${isNavOpen ? 'open' : ''}`} />
          <div className={`bar ${isNavOpen ? 'open' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default SellerNav;