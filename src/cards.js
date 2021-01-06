 import React from 'react'
 import './Cards.css'

function cards() {
    return (
        <div className="cards_main">
            <div className="cards">
                <h2 className="card_heading">PISTACHIOOOOOOO</h2>
                <p className="card_para">Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino blended beverage.</p>
                <img className="card_image" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"></img>
            </div>
            <div className="card2">
                <h2 className="card_heading">Mushroom Sous Vide Egg Bites.</h2>
                <p className="card_para">Power up with the Impossible™ Breakfast Sandwich* or new Kale & Portabella Mushroom Sous Vide Egg Bites.</p>
                <img className="card_image" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67827.png"></img>
            </div>
            
        </div>
    )
}

export default cards
