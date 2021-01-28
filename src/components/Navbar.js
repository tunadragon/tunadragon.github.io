import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navbar.css'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const onLinkClick = () => {
        setShowMenu(false) // hide menu
    }

    const scrollWithOffset = (el) => {
        const navbarOffset = document.documentElement.clientHeight * 0.08;
        const position = el.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = position - navbarOffset
        window.scrollTo(0, offsetPosition)
    }

    return (
        <>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <Link to='/#home'>
                        PATRICIA LEE
                    </Link>
                </div>
                <ul className={`nav-links ${showMenu ? 'nav-menu-active' : ''}`}>
                    <li className='nav-item'>
                        <Link to='/#home' className='' onClick={onLinkClick} scroll={el => scrollWithOffset(el)}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#about' className='' onClick={onLinkClick} scroll={el => scrollWithOffset(el)}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#experience' className='' onClick={onLinkClick} scroll={el => scrollWithOffset(el)}>Experience</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#projects' className='' onClick={onLinkClick} scroll={el => scrollWithOffset(el)}>Projects</Link>
                    </li>
                </ul>
                <div className='nav-menu-icon' onClick={() => setShowMenu(!showMenu)}>
                    <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </nav>
        </>
    )
}

export default Navbar
