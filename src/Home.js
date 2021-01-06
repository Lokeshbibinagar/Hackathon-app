import React from 'react'
import './Home.css'
import Cards from './Cards'
import BestCards from './BestCards'

function Home() {
    return (
        <div className="home">
            <h1 className="todays-spl">Today's Special</h1>
            <Cards />
            <h1 className="best-serve">Best Serve</h1>
            <BestCards />
        </div>
    )
}

export default Home
