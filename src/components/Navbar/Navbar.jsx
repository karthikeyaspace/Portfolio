import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Bars from '../../assets/bars.png'

export default function Navbar(props) {

    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [MoreThemes, setMoreThemes] = useState(false)
    const handleClick = () => {
        setMenu(!menu)
        setDropdown(false)
        setMoreThemes(false)
    }

    function handleSystemTheme() {
        const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (getCurrentTheme) {
            props.setTheme('dark')
        } else {
            props.setTheme('light')
        }
    }


    return (
        <div className="header h-16 w-full bg-primary fixed top-0 z-10 border-b-2  border-secondary transition-all duration-300">
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
                    {/* <div className="themes flex flex-row">
                        <button onClick={() => props.setTheme('light')} className="theme-button">Light</button>
                        <button onClick={() => props.setTheme('dark')} className="theme-button">Dark</button>
                        <button onClick={handleSystemTheme} className="theme-button">System</button>
                    </div> */}

                    <div className="dropdowndiv">

                        <li className="nav-item font-extrabold cursor-pointer  transition-all duration-300 hover:opacity-60" onClick={() => {setDropdown(!dropdown); setMoreThemes(false)}}>
                            Themes
                        </li>
                        {dropdown && <div className="dropdown relative w-24 right-24 bottom-20 lg:absolute lg:top-16 lg:right-2 ">
                            <div className="bg-primary  border-2 border-secondary p-2">
                                <p onClick={() => props.setTheme('light')} className="cursor-pointer hover:opacity-60">Light</p>
                                <p onClick={() => props.setTheme('dark')} className="cursor-pointer hover:opacity-60">Dark</p>
                                <p onClick={handleSystemTheme} className="cursor-pointer hover:opacity-60">System</p>
                                <p onClick={() => setMoreThemes(!MoreThemes)} className="hover:opacity-60">{MoreThemes ? <p> Less.. </p> : <p> More..</p>}</p>
                                {MoreThemes && <div className="morethemes">
                                    <p onClick={() => props.setTheme('red')}>Red</p>
                                    <p onClick={() => props.setTheme('green')}>Green</p>
                                    <p onClick={() => props.setTheme('blue')}>Blue</p>
                                    <p onClick={() => props.setTheme('pink')}>Pink</p>
                                </div>}
                            </div>
                        </div>}
                    </div>

                </ul>

                <div className="bars" onClick={handleClick}>
                    <img src={Bars} alt="" />
                </div>
            </nav>
        </div>
    )
}