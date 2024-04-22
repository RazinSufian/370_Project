import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminSignup } from '../../../features/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AdminSignup() {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
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
        toast.success('Admin signup successful');
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
        dispatch(adminSignup(formData));
    };

    return (
        <div>
            <Toaster />
            <h2>Admin Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Role:</label>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChange} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default AdminSignup;
