import React, { useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from '../../features/users/customerSlice';

const Main = () => {
    const customer_id = localStorage.getItem('customer_id');
    const dispatch = useDispatch();
    const { isLoading, role, loaded } = useSelector((state) => state.customer);
    const navigate = useNavigate();
    const sellerRole = localStorage.getItem('role');
    console.log('sellerRole', sellerRole);
    useEffect(() => {
        if (loaded && role !== 'customer') {
            navigate('/');
        }
        if (sellerRole === 'seller') {
            navigate('/seller');
            console.log('redirecting to seller');
        }
    }, [role, navigate, isLoading]);
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