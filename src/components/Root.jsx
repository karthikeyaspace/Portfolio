import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollTotop';

export default function Root() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme !== null ? storedTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`${theme}`}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <ScrollToTop />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
            
        </div>
    );
}