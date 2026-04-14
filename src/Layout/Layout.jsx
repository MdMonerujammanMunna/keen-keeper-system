import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../component/Navigation/NavBar';
import Footer from '../component/Footer/Footer';

const Layout = () => {
    return (
        <>
            <div className="container mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet >
                <Footer></Footer>
            </div>
        </>);
};

export default Layout;