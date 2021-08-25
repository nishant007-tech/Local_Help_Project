import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"
import { useState } from 'react';
import { useRef } from 'react';


function Topbar() {

    let scrollRef = useRef();
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 90) {
            scrollRef?.current?.classList.add("scrolling");
        } else {
            scrollRef?.current?.classList.remove("scrolling");
        }
        if (document.documentElement.scrollTop >= 600) {
            scrollRef?.current?.classList.add("revealTopbar");
        } else {
            scrollRef?.current?.classList.remove("revealTopbar");
        }
    })


    return (
        <div ref={scrollRef} className="TopBarContainer">
            <span>
                <img src="/images/Mainlogo3.png" alt="NavLogo" />
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
