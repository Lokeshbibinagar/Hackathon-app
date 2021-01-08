 import React from 'react'
 import './Cards.css'

function cards({ classId, heading, para, image }) {
    return (
        <div className="cards_main">
            <div className={ classId } >
                <h2 className="card_heading">{ heading }</h2>
                <p className="card_para">{ para }</p>
                <img className="card_image" src={ image }></img>
            </div>
            
        </div>
    )
}

export default cards
