import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header id="header">
            <h1>Task Tracker</h1>
            <nav id="nav_bar">
                <NavLink className='nav_link' to="/">Home</NavLink>
                <NavLink className='nav_link' to="/register">Register</NavLink>
            </nav>
        </header>
    )
}
export default NavBar;