import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-links">
                <div className="footer-link-wrapper">
                    {/* <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/'>Background</Link>
                        <Link to='/'>Skills</Link>
                        <Link to='/'>Projects</Link>
                    </div> */}
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to='/'><i className="far fa-envelope"></i> Email</Link>
                        <Link to='/'><i className="fab fa-linkedin"></i> LinkedIn</Link>
                        <Link to='/'><i className="fab fa-github"></i> Github</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
