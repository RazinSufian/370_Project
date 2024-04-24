import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';

const withSellerAccess = (WrappedComponent) => {
    return (props) => {
        const { isLoading, role, loaded } = useSelector((state) => state.user);
        const navigate = useNavigate();

        useEffect(() => {
            if (loaded && role !== 'seller') {
                navigate('/');
            }
        }, [role, navigate, isLoading]);

        if (isLoading) {
            return <Spinner />;
        }

        if (role !== 'seller') {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withSellerAccess;
