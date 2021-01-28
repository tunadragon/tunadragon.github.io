import React from 'react'
import './CarouselItem.css'

export default function CarouselItem(props) {
    const {title, imageUrl, imageUrl2, date, bgColor, description, link} = props

    return (
        <div className='carousel-item' style={{background: bgColor}}>
            <div className='ci-image'>
                <img src={imageUrl} alt={title} />
            </div>
            <div className='ci-render'>
                {imageUrl2 ? <img src={imageUrl2} alt={title} className='ci-image2'/> : ''}
                <div className='ci-description'>
                    <h4>{title} ({date})</h4>
                    <p>{description}</p>
                    {link ? 
                        <><br/><a href={link} target='_blank' rel="noreferrer" className='ci-link'>Link to project</a> </>
                        : ''}
                </div>
                
            </div>
            
        </div>
    )
}
