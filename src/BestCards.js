import React from 'react'
import './BestCards.css'

function BestCards() {
    return (
        <div>
             <div className="best-cards">
                <h2 className="card_heading">MEATLESS MONDAYS</h2>
                <p className="card_para">Enjoy $2 off any vegetarian breakfast sandwich or wrap every Monday in January.</p>
                <img className="card_image" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png"></img>
            </div>
            <div className="best-card2">
                <h2 className="card_heading">Nitro Cold Brew with Sweet Cream</h2>
                <p className="card_para">Topped with house-made sweet cream.</p>
                <img className="card_image" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67906.png"></img>
            </div>
        </div>
    )
}

export default BestCards
