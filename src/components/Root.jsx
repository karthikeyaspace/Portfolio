import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollTotop';

export default function Root() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className='min-h-screen'> 
                <Outlet />
            </div>
            <Footer />
        </>
    )
}