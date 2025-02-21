import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    const location = useLocation();
    const isLoggedIn = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div className='w-11/12 mx-auto'>
            {isLoggedIn || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;