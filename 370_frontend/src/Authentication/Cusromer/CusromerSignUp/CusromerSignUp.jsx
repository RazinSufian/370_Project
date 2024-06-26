import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerSignup } from '../../../features/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './CusromerSignUp.css'; // Import the CSS file

function CustomerSignup() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', pass: '', division: '', house_no: '', city: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error && error.message) {
      toast.error(error.message);
    }
    if (status === 'succeeded') {
      toast.success('Customer signup successful');
      navigate('/');
    }
  }, [error, status, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(customerSignup(formData));
  };

  return (
    <div className="customer-signup-container">
      <Toaster />
      <h2 className="customer-signup-heading">Customer Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input type="password" name="pass" value={formData.pass} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Division:</label>
          <input type="text" name="division" value={formData.division} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">House No:</label>
          <input type="text" name="house_no" value={formData.house_no} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" required />
        </div>
        <button type="submit" className="btn-submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p className="login-text">Already have an account? <Link to="/auth/customer/login" className="login-link">Login</Link></p>
      </form>
    </div>
  );
}

export default CustomerSignup;
