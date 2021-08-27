import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../serviceProviderBanner/service'
import Cards from '../small_cards_content/cards'
import './home.css'
import ScrollAnimation from 'react-animate-on-scroll';


function Home() {

    return (
        <>
            <div className="HomeContainer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/hero-bg.png"})` }}>
                <div className="HomeSectionOne">
                    <ScrollAnimation
                        animateIn="animate__fadeInLeft"
                        duration={1}
                        animateOnce={true}
                    >
                        <h2>One stop solution for <br /> all your needs.</h2>
                        <p>Get in touch with all types of local services in your vicinity with just a click.
                        </p>
                        <Link to="/">
                            Create a free account
                            <i className="fas fa-angle-right"></i>
                        </Link>
                        <span>No Credit Card Necessary</span>
                    </ScrollAnimation>
                </div>

                <div className="HomeSectionTwo">
                    <img src="/images/svgImg1.svg" alt="mainImg" />
                    <div className="img1">
                        <img src="/images/small_icons_like_pics/svgsmall1.svg" alt="smallImg" />
                    </div>
                    <div className="img2">
                        <img src="/images/small_icons_like_pics/chat-icon.svg" alt="smallChatIcon" />
                    </div>
                </div>
            </div>
            <Cards />
            <Service />
        </>
    )
}

export default Home
