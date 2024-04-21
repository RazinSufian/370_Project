// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

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
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
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
