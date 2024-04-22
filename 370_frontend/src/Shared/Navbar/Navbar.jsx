// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-container">
        <div className="logo">Your Logo</div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          
          <Link to="/product-listings">Product Listings</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/order-confirmation">Order Confirmation</Link>
          <Link to="/user-account">User Account</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/seller-reviews">Seller Reviews</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/privacy-policy-terms">Privacy Policy & Terms</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/auth">Log In/Sign Up</Link>
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

export default Navbar;
