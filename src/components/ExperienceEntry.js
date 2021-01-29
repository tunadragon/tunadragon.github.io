import React from 'react'
import './ExperienceEntry.css'

export const ExperienceEntry = ({children, title, location, date, logo, separator}) => {
    return (
        <div className={`experience-entry-container ${separator ? 'bottom-separator' : ''}`}>
            { logo ? <div className='company-logo'><img src={logo} alt='Logo' /></div> : ''}
            <div className='experience-entry'>
                <div className='experience-title'>
                    <h3>{title}</h3>
                </div>
                <div className='experience-info'>
                    <div>
                        <p><i className="fas fa-map-marker-alt"></i> {location}</p>
                    </div>
                    <div>
                        <p><i className="far fa-calendar"></i> {date}</p>
                    </div>
                </div>
                <div className='experience-details'>
                    {children}
                </div>
            </div>
        </div>
        
    )
}
