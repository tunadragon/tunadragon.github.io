import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    // const [button, setButton] = useState(true) //

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // const showButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true)
    //     }
    // }

    // window.addEventListener('resize', showButton)
    
    const path = useLocation().pathname;

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        PL
                        </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className={'nav-links' + (path === '/' ? ' active' : '')} onClick={closeMobileMenu}>
                                Home    
                            </Link>
                        </li>
                    
                        <li className="nav-item">
                            <Link to='/home/#about' className={'nav-links' + (path === '/about' ? ' active' : '')} onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/projects' className={'nav-links' + (path === '/projects' ? ' active' : '')} onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>  
        </>
    )
}

export default Navbar
