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
      <div className="nav-container">
        <div className="logo">Your Logo</div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="profile">Profile</Link>
          <Link to="shop">Shop</Link>
          <Link to="products">Products</Link>
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