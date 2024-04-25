import React from 'react';
import SellerNav from '../../Shared/SellerNav/SellerNav';
import { Outlet } from 'react-router-dom';
import './SellerLayout.css'
import withSellerAccess from '../../Authentication/ProtectedRoute/SellerProtectedRoute';
import { useGetShopBySellerIdQuery } from '../../features/shop/shopAPI';

const SellerLayout = () => {
    const seller_id = localStorage.getItem('seller_id');
    const { data: shopData, isLoading, isError, error, refetch } = useGetShopBySellerIdQuery(seller_id, { skip: !seller_id });
    if (shopData){
        console.log(shopData[0]);
        localStorage.setItem('shop_id', shopData[0].shop_id);
    }
    return (
        <div>
            <SellerNav></SellerNav>
            <div className="seller-layout">
            <Outlet ></Outlet>
            </div>

            
        </div>
    );
};

export default withSellerAccess(SellerLayout);