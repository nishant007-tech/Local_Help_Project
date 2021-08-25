import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"

function Topbar() {

    return (
        <div className="TopBarContainer">
            <span>
                <img src="/images/small_icons_like_pics/logo-white.png" alt="NavLogo" />
            </span>
            <ul>
                <li>
                    <Link to="/">
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Support
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Sign Up
                    </Link>
                </li>
                <li id="SpecialBtn">
                    <Link to="/">
                        Get Started
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Topbar
