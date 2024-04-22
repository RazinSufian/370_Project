import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerLogin } from '../../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function CustomerLogin() {



    const { error, isLoading, status } = useSelector((state) => state.auth);
    const navigate = useNavigate(); // Initialize the useNavigate hook
    useEffect(() => {
      if (error && error.message) { // Check if error exists and has a message property
        toast.error(error.message); // Display the error message
      }
      if (status === 'succeeded') {
        toast.success('Customer Login successful');
        navigate('/'); // Navigate to the last page
      }
    }, [error, status, navigate]);
  
    const [formData, setFormData] = useState({
        email: '',
        pass: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(customerLogin(formData));
    };

    return (
        <div>
            <Toaster />
            <h2>Customer Login</h2>
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
                <p>Don't have an account? <Link to="/auth/customer/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default CustomerLogin;
