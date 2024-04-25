import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sellerLogin } from '../../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function SellerLogin() {
    const [formData, setFormData] = useState({
        email: '',
        pass: ''
    });
    const dispatch = useDispatch();

    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { error, isLoading, status } = useSelector
    ((state) => state.auth);

    useEffect(() => {
      if (error && error.message) { // Check if error exists and has a message property
        toast.error(error.message); // Display the error message
      }
      if (status === 'succeeded') {
        toast.success('Seller LoginS successful');
        navigate('/seller'); // Navigate to the last page
      }
      console.log(status)
    }, [error, status, navigate]);
  

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sellerLogin(formData));
    };

    return (
        <div>
            <Toaster />
            <h2>Seller Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/auth/seller/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default SellerLogin;
