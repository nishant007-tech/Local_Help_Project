import React from 'react'
import './cards.css'

function Cards() {
    return (
        <div className="cardsContainer">
            <div className="cardOne">
                <img className="svgIcon" src="/images/small_icons_like_pics/svgSmall3.svg" alt="icon1" />
                <h3>Stay connected.</h3>
                <p>We will keep trying to help you search all types of service providers in your vicinities.</p>
            </div>
            <div className="cardTwo">
                <img className="svgIcon" src="/images/small_icons_like_pics/svgSmall2.svg" alt="icon2" />
                <h3>Free access for all.</h3>
                <p>Our aim is to provide free access of the information to each and every person. </p>
            </div>
            <div className="cardThree">
                <img className="svgIcon" src="/images/small_icons_like_pics/svgSmall4.svg" alt="icon3" />
                <h3>Smart search.</h3>
                <p>We automatically suggest you results based on your current location. We use advanced algorithms to provide better search results.</p>
            </div>
        </div>
    )
}

export default Cards
