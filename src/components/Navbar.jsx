import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo"><h1>CATBOOK</h1></div>
            <div className="nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/user">Useres</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </div>
        </div>
    )
}

export default Navbar