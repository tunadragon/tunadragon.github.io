import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
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

    const scrollWithOffset = (el) => {
        const navbarOffset = 64;
        const position = el.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = position - navbarOffset
        window.scrollTo(0, offsetPosition)
    }
    
    const path = useLocation().pathname;

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/#home-section' className='navbar-logo' scroll={el => scrollWithOffset(el)} onClick={closeMobileMenu}>
                        PL
                        </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/#home-section' className={'nav-links' + (path === '/' ? ' active' : '')} scroll={el => scrollWithOffset(el)} onClick={closeMobileMenu}>
                                Home    
                            </Link>
                        </li>
                    
                        <li className="nav-item">
                            <Link to='/#about-section' className='nav-links' scroll={el => scrollWithOffset(el)} onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/projects/#programming-projects' className={'nav-links' + (path.startsWith('/projects') ? ' active' : '')} scroll={el => scrollWithOffset(el)} onClick={closeMobileMenu}>
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
