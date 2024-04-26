import React from 'react';
import SellerNav from '../../Shared/SellerNav/SellerNav';
import { Outlet } from 'react-router-dom';
import './SellerLayout.css'
import withSellerAccess from '../../Authentication/ProtectedRoute/SellerProtectedRoute';
import { useGetShopBySellerIdQuery } from '../../features/shop/shopAPI';

const SellerLayout = () => {
    const seller_id = localStorage.getItem('seller_id');
    const { data: shopData, isLoading, isError, error, refetch } = useGetShopBySellerIdQuery(seller_id, { skip: !seller_id });

    // Additional logging to see what shopData contains
    console.log('Shop Data:', shopData);

    // More robust check
    if (shopData && shopData.length > 0 && shopData[0].shop_id) {
        console.log('Setting shop_id:', shopData[0].shop_id);
        localStorage.setItem('shop_id', shopData[0].shop_id);
    } else {
        console.error('Shop data is not available or incomplete:', shopData);
    }

    return (
        <div>
            <SellerNav></SellerNav>
            <div className="seller-layout">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default withSellerAccess(SellerLayout);
