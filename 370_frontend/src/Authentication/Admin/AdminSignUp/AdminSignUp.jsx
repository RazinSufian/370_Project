import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminSignup } from '../../../features/auth/authSlice';


function AdminSignup() {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
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
        dispatch(adminSignup(formData));
    };

    return (
        <div>
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
