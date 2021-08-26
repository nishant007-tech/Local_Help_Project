import { Button } from '@material-ui/core'
import React from 'react'
import './register.css'

function Register() {
    return (
        <div className="registerContainer">
            <h3><i className="fas fa-user-circle"></i> Register as a Service Provider.</h3>
            <div className="registerContent">
                <div className="sectionOne">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                    <label>Category</label>
                    <input type="text" placeholder="Enter your category" />
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
        </div>
    )
}

export default Register
