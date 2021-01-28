import React from 'react'
import './ExperienceEntry.css'

export const ExperienceEntry = ({children, title, location, date, separator}) => {
    return (
        <div className={`experience-entry ${separator ? 'bottom-separator' : ''}`}>
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
    )
}
