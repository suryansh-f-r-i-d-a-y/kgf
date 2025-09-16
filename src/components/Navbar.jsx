
import React from 'react'
import './Navbar.css'
import logo from '../assets/kgflogo.png'

const Navbar = () => {
    return (
        <header class="navbar" id="myNavbar">
          <img src={logo} className='logo' alt="" />
            <nav class="nav-links">
                <a href="#home">Home page</a>
                <a href="#about">About Us</a>
            </nav>
        </header>
    )
}

export default Navbar