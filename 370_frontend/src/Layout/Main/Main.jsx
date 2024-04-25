import React, { useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCustomer } from '../../features/users/customerSlice';

const Main = () => {
    const customer_id = localStorage.getItem('customer_id');
    const dispatch = useDispatch();
    useEffect(() => {
        if (!customer_id) {
            dispatch(getCustomer());
        }
    }, [customer_id, dispatch]);
    return (
        <div>
            <Toaster />
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;