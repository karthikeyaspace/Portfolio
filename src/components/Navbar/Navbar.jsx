import React from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Bars from '../../assets/bars.png'

export default function Navbar() {
    
    const [menu, setMenu] = React.useState(false)
    const handleClick = ()=> setMenu(!menu)

    return (
        <div className="header h-16 w-full bg-white  fixed top-0 z-10 border-b-2 border-black">
            <nav className='container flex flex-row justify-between items-center h-full px-12 py-0'>
                <span><a href="/"><img src={logo} className="w-12" /></a></span>
                <ul className={menu ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" onClick={handleClick} className='nav-link secondary'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" onClick={handleClick} className='nav-link secondary'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="projects" onClick={handleClick} className='nav-link secondary'>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="blogs" onClick={handleClick} className='nav-link secondary'>
                            Blogs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="resume" onClick={handleClick} className='nav-link secondary'>
                            Resume
                        </Link>
                    </li>
                </ul>

                <div className="bars" onClick={handleClick}>
                    <img src={Bars} alt="" />
                </div>
            </nav>
        </div>
    )
}