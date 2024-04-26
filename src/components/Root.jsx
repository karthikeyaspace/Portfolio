import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollTotop';
import themeContext from '../context/themeContext';

export default function Root() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            setTheme(localStorage.getItem('theme'));
        }
    }, [theme]); 

    

    console.log("root", theme);

    return (
        <themeContext.Provider>
            <Navbar />
            <ScrollToTop />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </themeContext.Provider>
    );
}