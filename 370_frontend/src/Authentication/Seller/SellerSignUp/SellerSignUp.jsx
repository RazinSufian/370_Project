import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sellerSignup } from '../../../features/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function SellerSignup() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { error, isLoading, status } = useSelector((state) => state.auth);

    useEffect(() => {
      if (error && error.message) { // Check if error exists and has a message property
        toast.error(error.message); // Display the error message
      }
      if (status === 'succeeded') {
        toast.success('Seller signup successful');
        navigate('/'); // Navigate to the last page
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
        dispatch(sellerSignup(formData));
    };

    return (
        <div>
            <h2>Seller Signup</h2>
            <Toaster />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChange} required />
                </div>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/auth/seller/login">Login</Link></p>
            </form>
        </div>
    );
}

export default SellerSignup;
