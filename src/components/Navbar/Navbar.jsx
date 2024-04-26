import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Bars from '../../assets/bars.png'

export default function Navbar() {

    const [menu, setMenu] = React.useState(false)
    const handleClick = () => setMenu(!menu)
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="header h-16 w-full bg-white  fixed top-0 z-10 border-b-2 border-black">
            <nav className='container flex flex-row justify-between items-center h-full px-12 py-0'>
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
                        <li className='nav-item'>
                            Projects
                        </li>
                    </Link>
                    <Link to="resume" onClick={handleClick} className='nav-link secondary'>
                        <li className='nav-item '>
                            Resume
                        </li>
                    </Link>
                    {/* <div className="themes">
                        <button onClick={() => setTheme('light')} className="theme-button">Light</button>
                        <button onClick={() => setTheme('dark')} className="theme-button">Dark</button>
                    </div> */}
                </ul>

                <div className="bars" onClick={handleClick}>
                    <img src={Bars} alt="" />
                </div>
            </nav>
        </div>
    )
}