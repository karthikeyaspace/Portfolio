import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Bars from '../../assets/bars.png'

export default function Navbar(props) {

    const [menu, setMenu] = useState(false)
    const handleClick = () => setMenu(!menu)

    const handleSystemTheme = () =>{
        useEffect(() => {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // props.setTheme(prefersDarkMode ? 'dark' : 'light');
            console.log(prefersDarkMode)
        }, []);
    }


    return (
        <div className="header h-16 w-full bg-primary fixed top-0 z-10 border-b-2 border-secondary transition-all duration-300">
            <nav className='container flex flex-row justify-between items-center h-full px-12 py-0 text-secondary'>
                <span><a href="/"><img src={logo} className="w-12" /></a></span>
                <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/" onClick={handleClick} className='nav-link secondary'>
                        <li className='nav-item'>
                            Home
                        </li>
                    </Link>
                    <Link to="about" onClick={handleClick} className='nav-link secondary'>
                        <li className='nav-item'>
                            About
                        </li>
                    </Link>
                    <Link to="projects" onClick={handleClick} className='nav-link secondary'>
                        <li className='nav-item '>
                            Projects
                        </li>
                    </Link>
                    <Link to="resume" onClick={handleClick} className='nav-link secondary'>
                        <li className='nav-item'>
                            Resume
                        </li>
                    </Link>
                    <div className="themes flex flex-row">
                        <button onClick={() => props.setTheme('light')} className="theme-button">Light</button>
                        <button onClick={() => props.setTheme('dark')} className="theme-button">Dark</button>
                        <button onClick={handleSystemTheme} className="theme-button">System</button>
                    </div>
                </ul>

                <div className="bars" onClick={handleClick}>
                    <img src={Bars} alt="" />
                </div>
            </nav>
        </div>
    )
}