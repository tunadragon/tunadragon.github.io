import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <h3>Contact Me</h3>
            <div className='links-container'>
                <a href='mailto: patricia.e.lee.work@gmail.com' target='_blank' rel="noreferrer"><i className="fas fa-envelope social-icon"></i></a>
                <a href='https://linkedin.com/in/patricia-lee-934177120' target='_blank' rel="noreferrer"><i className="fab fa-linkedin social-icon"></i></a>
                <a href='https://github.com/tunadragon' target='_blank' rel="noreferrer"><i className="fab fa-github social-icon"></i></a>
            </div>
            
        </footer>
    )
}

export default Footer
