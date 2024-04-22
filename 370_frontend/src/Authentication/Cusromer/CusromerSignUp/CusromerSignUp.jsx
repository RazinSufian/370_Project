import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerSignup } from '../../../features/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function CustomerSignup() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', pass: '', division: '', house_no: '', city: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { error, isLoading, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error && error.message) { // Check if error exists and has a message property
      toast.error(error.message); // Display the error message
    }
    if (status === 'succeeded') {
      toast.success('Customer signup successful');
      navigate('/last-page'); // Navigate to the last page
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
    <div>
      <Toaster />
      <h2>Customer Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="pass" value={formData.pass} onChange={handleChange} required />
        </div>
        <div>
          <label>Division:</label>
          <input type="text" name="division" value={formData.division} onChange={handleChange} required />
        </div>
        <div>
          <label>House No:</label>
          <input type="text" name="house_no" value={formData.house_no} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default CustomerSignup;