import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sellerLogin } from '../../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './SellerLogin.css'; // Import the CSS file

function SellerLogin() {
    const [formData, setFormData] = useState({
        email: '',
        pass: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { error, isLoading, status } = useSelector((state) => state.auth);

    useEffect(() => {
        if (error && error.message) {
            toast.error(error.message);
        }
        if (status === 'succeeded') {
            toast.success('Seller Login successful');
            navigate('/seller');
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
        dispatch(sellerLogin(formData));
    };

    return (
        <div className="seller-login-container">
            <Toaster />
            <h2 className="seller-login-heading">Seller Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChange} className="form-input" required />
                </div>
                <button type="submit" className="btn-submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                <p className="signup-text">Don't have an account? <Link to="/auth/seller/signup" className="signup-link">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default SellerLogin;
