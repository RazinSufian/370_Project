import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userRole = localStorage.getItem('role');
      setIsLoggedIn(loggedIn);
      setRole(userRole);
    };

    checkAuth();
    // Optionally, you can also listen to storage events to update state when local storage changes
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  });

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-container">
        <div className="logo">Your Logo</div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          {isLoggedIn && <>
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
          </>}
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/auth/customer/login">Log In/Sign Up</Link>
              <Link to="/auth/seller/signup">Become a Seller</Link>
            </>
          )}
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
