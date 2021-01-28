import React from 'react'
import './SkillEntry.css'

export const SkillEntry = ({children, category}) => {
    return (
        <div className='skills'>
            <span className='skill-category'>{category}</span>
            <span className='skills-list'>{children}</span>
        </div>
    )
}
