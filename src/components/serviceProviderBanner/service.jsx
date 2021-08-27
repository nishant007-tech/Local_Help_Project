import React from 'react'
import { Link } from 'react-router-dom'
import './service.css'
import ScrollAnimation from 'react-animate-on-scroll';



function Service() {
    return (
        <div className="serviceBannerContainer">
            <img className="imgForBtrLook" src="/images/footer-shape.svg" alt="svgImg" />
            <img className="imgForBtrLook2" src="/images/small_icons_like_pics/white-shape.svg" alt="svgImg" />
            <div className="serviceContent">
                <ScrollAnimation
                    animateIn="animate__fadeIn"
                    animateOnce={true}
                    duration={1.5}
                >
                    <h2>Are you a Service Provider ?</h2>
                    <p>Get yourself Registered so that people get to know about you and your work!</p>
                    <Link to="/register_service_provider">
                        Register Now
                        <i className="fas fa-user-plus"></i>
                    </Link>
                </ScrollAnimation>
            </div>
            <div className="icon1">
                <img src="/images/small_icons_like_pics/flower.png" alt="Flower" />
            </div>
            <div className="icon2">
                <img src="/images/small_icons_like_pics/rocket.png" alt="Rocket" />
            </div>
        </div>
    )
}

export default Service
