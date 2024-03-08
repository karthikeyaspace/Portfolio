import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import {Outlet} from 'react-router-dom';
import ScrollToTop from './ScrollTotop';

export default function Root() {
    return (
        <>
            <Navbar />
            <ScrollToTop/>
            <div className='mainroot' style={{minHeight: '1450px'}}> 
                <Outlet />
            </div>
            <Footer />
        </>
    )
}