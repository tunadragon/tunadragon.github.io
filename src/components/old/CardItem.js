import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <img src={props.src} alt={props.label} />
                    <h5>{props.text}</h5>
                </Link>
            </li>
        </>
    )
}

export default CardItem
