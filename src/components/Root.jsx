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
            <div className='w-screen  fixed bottom-0 bg-red-600 text-center'>
                <p className=''>This portfolio is not maintained, for more updated info about me visit - <a className='text-blue-900' href="https://kv3.vercel.app">portfolio</a></p>
            </div>
            
        </div>
    );
}