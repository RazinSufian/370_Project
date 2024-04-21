import React from 'react';
import SellerNav from '../../Shared/SellerNav/SellerNav';
import { Outlet } from 'react-router-dom';
import './SellerLayout.css'

const SellerLayout = () => {
    return (
        <div>
            <SellerNav></SellerNav>
            <div className="seller-layout">
            <Outlet ></Outlet>
            </div>

            
        </div>
    );
};

export default SellerLayout;