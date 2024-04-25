import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { getSeller } from '../../features/users/sellerSlice';

const withSellerAccess = (WrappedComponent) => {
    return (props) => {
        const {  isLoading, role, loaded } = useSelector((state) => state.seller);
        const navigate = useNavigate();
        const dispatch = useDispatch();
        console.log(role)
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        useEffect(() => {
            if (!role) {
                dispatch(getSeller());
            }
        }, [role, dispatch]);

        useEffect(() => {
            if (!isLoggedIn && !loaded && role !== 'seller') {
                console.log(role)
                navigate('/auth/seller/login');
            }
        }, [role, navigate]);

        if (isLoading) {
            return <Spinner />;
        }

        

        return <WrappedComponent {...props} />;
    };
};

export default withSellerAccess;
