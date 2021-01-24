import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--toggle']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({ children, type, onClick, linkTo, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const path = useLocation().pathname;
    const checkLinkTo = linkTo ? linkTo : path

    return (
        <Link to={checkLinkTo} className='btn-mobile' >
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}