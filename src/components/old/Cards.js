import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>check out htese cards</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/"
                            label=""
                            text=""
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
