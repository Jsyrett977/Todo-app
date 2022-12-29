import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
const NavBar = ({token, setToken}) => {
    return (
        <header id="header">
            <h1>Task Tracker</h1>
            <nav id="nav_bar">
                {token ? <NavLink className='nav_link' to="/tasks">Tasks</NavLink> : null}
                {token ? <NavLink className='nav_link' to="/completed">Completed</NavLink> : null}
                {token ? <Logout setToken={setToken}/> : null}
            </nav>
        </header>
    )
}
export default NavBar;