import React from 'react'
import './ProjectInfo.css'

function ProjectInfo(props) {
    const {title, description, img, date, tools, link, linkText} = props
    return (
        <div className="project-info">
            <div className="project-image">
                {img !== '' ? <img src={img} alt={title} /> : ''}
            </div>
            <div className="project-text">
                <h3>{title}  <span className="date-text">[{date}]</span></h3>
                {link !== '' ? <><a target="_blank" rel="noreferrer" href={link}>{linkText}</a><br/></> : ''}
                <p>{description}</p>
                <p>Tools used: {tools}</p>
            </div>
        </div>
    )
}

export default ProjectInfo
