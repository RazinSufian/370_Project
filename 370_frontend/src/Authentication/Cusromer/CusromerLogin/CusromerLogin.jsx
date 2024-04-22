import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { customerLogin } from '../../../features/auth/authSlice';


function CustomerLogin() {
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
            </form>
        </div>
    );
}

export default CustomerLogin;
