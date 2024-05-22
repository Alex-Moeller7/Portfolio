import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contactMe from '../../assets/contactMe.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/> 
            <div className="desktopMenu">
                <Link class="desktopMenuListItem">Home</Link>
                <Link class="desktopMenuListItem">About</Link>
                <Link class="desktopMenuListItem">Portfolio</Link>
                <Link class="desktopMenuListItem">Resume</Link>
            
            </div>
            <button class="desktopMenuBtn">
                <img src={contactMe} alt="" className="desktopMenuImg"/>Contact</button>
        </nav>
    )
}

export default Navbar