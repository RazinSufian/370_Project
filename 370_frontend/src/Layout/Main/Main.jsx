import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Toaster />
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;