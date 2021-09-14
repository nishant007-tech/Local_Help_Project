import { Button, FormHelperText } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './register.css'
import { useRef } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';

function Register() {

    let ulDropDown = useRef();

    const [fetchedCategories, setfetchedCategories] = useState([]);

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        category: "",
        categoryName: "",
        gender: "",
        phoneNo: "",
        address: "",
        email: "",
        profilePic: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(`${API_URL}/category`);
            if (res)
                setfetchedCategories(res.data?.result);
        }
        fetchData();
    }, [])

    const handleChange = (id, name) => {
        setState({
            ...state,
            category: id,
            categoryName: name,
        });
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

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleFile = async (e) => {
        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        let res = await axios.post(`${API_URL}/service-provider/file-upload`, formData)
        if (res)
            setState({
                ...state,
                [e.target.name]: res.data?.result?.file
            })
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post(`${API_URL}/service-provider/onboard`, {
            firstName: state.firstName,
            lastName: state.lastName,
            gender: state.gender,
            phoneNo: state.phoneNo,
            category: state.category,
            address: state.address,
            email: state.email,
            image: state.profilePic,
        })
        if (res) {
            window.location.reload();
        }
    }


    console.log(state)

    return (
        <div onClick={outsideClick} className="registerContainer">
            <h3><i className="fas fa-user-circle"></i> Register as a Service Provider.</h3>
            <div className="registerContent">
                <div className="sectionOne">
                    <label>First Name</label>
                    <input name="firstName" onChange={handleInputChange} type="text" placeholder="Enter your first name" />
                    <label>Email</label>
                    <input name="email" onChange={handleInputChange} type="email" placeholder="Enter your email" />
                    <label htmlFor="demo-simple-select">Category</label>
                    <input value={state.categoryName} style={{ cursor: "pointer" }} type="text" onClick={handleClick} placeholder="Select Category" />
                    <ul ref={ulDropDown} className="sub-menu" >
                        {
                            fetchedCategories.map(item => (
                                <li onClick={() => handleChange(item._id, item.name)} key={item.name} className="sub-menu--item">
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                    <label>Gender</label>
                    <input name="gender" onChange={handleInputChange} type="text" placeholder="Enter your gender" />

                </div>
                <div className="sectionTwo">
                    <label>Last Name</label>
                    <input name="lastName" onChange={handleInputChange} type="text" placeholder="Enter your last name" />
                    <label>Profile picture</label>
                    <input name="profilePic" onChange={handleFile} type="file" placeholder="Enter your permanent address" />
                    <label>Address</label>
                    <input name="address" onChange={handleInputChange} type="text" placeholder="Enter your permanent address" />
                    <label>Phone Number</label>
                    <input name="phoneNo" onChange={handleInputChange} type="number" placeholder="Enter your phone no." />
                </div>
            </div>
            <div className="RegisterBtn">
                <Button onClick={handelSubmit} startIcon={<i className="fas fa-user"></i>} variant="contained" style={{ color: "#fff", backgroundColor: "#FF7139", height: "45px" }}>Register</Button>
            </div>
        </div >
    )
}

export default Register
