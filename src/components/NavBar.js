import React from "react";
import { NavLink } from "react-router-dom";
import {Logout} from "./index"
const NavBar = ({token, setToken}) => {
    return (
        <header id="header">
            <h1>Task Tracker</h1>
            <nav id="nav_bar">
                <NavLink className='nav_link' to="/">Home</NavLink>
                <NavLink className='nav_link' to="/register">Register</NavLink>
                {token ? <Logout setToken={setToken}/> : <NavLink className='nav_link' to="/login">Login</NavLink>}
            </nav>
        </header>
    )
}
export default NavBar;