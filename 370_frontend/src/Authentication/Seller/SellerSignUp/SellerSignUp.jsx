import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sellerSignup } from '../../../features/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './SellerSignUp.css'; // Import the CSS file

function SellerSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, isLoading, status } = useSelector((state) => state.auth);

    useEffect(() => {
        if (error && error.message) {
            toast.error(error.message);
        }
        if (status === 'succeeded') {
            toast.success('Seller signup successful');
            navigate('/');
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
        dispatch(sellerSignup(formData));
    };

    return (
        <div className="seller-signup-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="seller-signup-container">
                <h2 className="seller-signup-heading">Seller Signup</h2>
                <Toaster />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" className="form-label">Password:</label>
                        <input type="password" id="pass" name="pass" value={formData.pass} onChange={handleChange} className="form-input" required />
                    </div>
                    <button type="submit" className="btn-submit">Sign Up</button>
                    <p className="login-text">Already have an account? <Link to="/auth/seller/login" className="login-link">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default SellerSignup;
