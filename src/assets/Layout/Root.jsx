import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar/Navbar.jsx';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>  
        </>
    );
};

export default Root;