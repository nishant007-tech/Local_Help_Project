import { Button, FormHelperText } from '@material-ui/core'
import React, { useState } from 'react'
import './register.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


function Register() {

    let ulDropDown = useRef();

    let data = [,
        {
            category: "Category1"
        },
        {
            category: "Category2"
        },
        {
            category: "Category3"
        },
    ]
    const [category, setCategory] = useState("");

    const handleChange = (event) => {
        setCategory(event.target.innerText);
        ulDropDown.current.style.opacity = "0";
        ulDropDown.current.style.visibility = "hidden";
    };
    const handleClick = (e) => {
        e.stopPropagation();
        if (ulDropDown.current.style.opacity === "1") {
            ulDropDown.current.style.opacity = "0";
            ulDropDown.current.style.visibility = "hidden";
        } else {
            ulDropDown.current.style.opacity = "1";
            ulDropDown.current.style.visibility = "visible";
        }
    }

    const outsideClick = (e) => {
        ulDropDown.current.style.opacity = "0";
        ulDropDown.current.style.visibility = "hidden";
    }

    return (
        <div onClick={outsideClick} className="registerContainer">
            <h3><i className="fas fa-user-circle"></i> Register as a Service Provider.</h3>
            <div className="registerContent">
                <div className="sectionOne">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                    <label htmlFor="demo-simple-select">Category</label>
                    <input value={category} style={{ cursor: "pointer" }} type="text" onClick={handleClick} placeholder="Select Category" />
                    <ul ref={ulDropDown} className="sub-menu" >
                        {
                            data.map(item => (
                                <li onClick={handleChange} key={item.category} className="sub-menu--item">
                                    {item.category}
                                </li>
                            ))
                        }
                    </ul>
                    <label>Contact Number</label>
                    <input type="number" placeholder="Enter your contact number" />
                    <label>Address</label>
                    <input type="text" placeholder="Enter your permanent address" />
                </div>
                <div className="sectionTwo">
                    <label>Profile picture</label>
                    <input type="file" placeholder="Enter your permanent address" />
                    <label>Rates per hour</label>
                    <input type="number" placeholder="Enter your rates per hour" />
                    <label>Work history</label>
                    <input type="text" placeholder="Enter your work history" />
                </div>
            </div>
            <div className="RegisterBtn">
                <Button startIcon={<i className="fas fa-user"></i>} variant="contained" style={{ color: "#fff", backgroundColor: "#FF7139", height: "45px" }}>Register</Button>
            </div>
        </div >
    )
}

export default Register
