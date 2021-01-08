import React from 'react'
import './Home.css'
import Cards from './Cards'

function Home() {
    return (
        <div className="home">
            <h1 className="todays-spl">Today's Special</h1>
            <Cards classId='cards' heading='PISTACHIOOOOOOO' para='Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino blended beverage.' image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png' />
            <Cards classId='cards_cyan' heading=' Portabella Mushroom Sous Vide Egg Bites' para='Power up with the Impossible Breakfast Sandwich or new Kale & Portabella Mushroom Sous Vide Egg Bites' image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67827.png'/>
            <h1 className="best-serve">Best Serve</h1>
            <Cards classId='cards_khaki' heading='vegetarian sandwich' para='Meatless vegetarian breakfast sandwich or wrap' image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png' />
            <Cards  classId='cards_choco' heading='NEW Honey Almondmilk Cold Brew' para='With a hint of honey and an almondmilk finish. ' image='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67894.png'  />

        </div>
    )
}

export default Home
