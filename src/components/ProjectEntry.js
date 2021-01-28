import React from 'react'
import './ExperienceEntry.css'

export const ProjectEntry = ({children, title, date, githubLink, url, tools}) => {
    const urlText = url.replace('https://', '')
    const githubText = 'Repository Link' //githubLink.replace('https://', '')
    return (
        <div className={'project-entry bottom-separator'}>
            <div className='project-title'>
                <h3>{title} </h3>
                <p className='project-details'><i className="far fa-calendar"></i> {date}</p>
            </div>
            <div className='project-details'>
                {children}
                <div className='tools-used'>
                    <i className="fas fa-toolbox"></i> <b>Tools used:</b> {tools}
                </div>
                {githubLink || url ? <div className='project-links'>
                    {url ? <p>
                        <b><i className="fas fa-link"></i> Link: </b> 
                        <a href={url} target='_blank' rel="noreferrer">{urlText}</a>
                    </p> : ''}
                    {githubLink ? <p>
                        <b><i className="fab fa-github"></i> Github: </b> 
                        <a href={githubLink} target='_blank' rel="noreferrer">{githubText}</a>
                    </p> : ''}
                </div> : ''}
            </div>
        </div>
    )
}
