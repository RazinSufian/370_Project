import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerLogin } from '../../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './CusromerLogin.css'; // Import the CSS file

function CustomerLogin() {
    const { error, isLoading, status } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (error && error.message) {
            toast.error(error.message);
        }
        if (status === 'succeeded') {
            toast.success('Customer Login successful');
            navigate('/');
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
        <div className="customer-login-container">
            <Toaster />
            <h2 className="customer-login-heading">Customer Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChange} className="form-input" required />
                </div>
                <button type="submit" className="btn-login">Login</button>
                <p className="signup-text">Don't have an account? <Link to="/auth/customer/signup" className="signup-link">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default CustomerLogin;
