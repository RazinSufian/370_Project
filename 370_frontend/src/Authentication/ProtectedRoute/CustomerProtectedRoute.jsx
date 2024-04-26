import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';

const withCustomerAccess = (WrappedComponent) => {
    return (props) => {
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

        if (isLoading) {
            return <Spinner />;
        }

        if (role !== 'customer') {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withCustomerAccess;
