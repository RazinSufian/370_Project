import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function AdminLogin() {
    const [formData, setFormData] = useState({
        name: '',
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
        toast.success('Admin Login successful');
        navigate('/last-page'); // Navigate to the last page
      }
    }, [error, status, navigate]);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(adminLogin(formData));
    };

    return (
        <div>
            <Toaster />
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;
