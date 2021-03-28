import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav=()=>{
    return(
        <>
        <nav className="nav-menu">
            <h2 className="logo">My Vlog</h2>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/About" >About</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Nav;