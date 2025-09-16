
import React from 'react'
import './Navbar.css'
import logo from '../assets/kgflogo.png'

const Navbar = () => {

    let lastScrollTop = 0;
    const navbar = document.getElementById('myNavbar');
    
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScrollPos > lastScrollTop && currentScrollPos > 100) {
            // Scrolling down and past 100px
            navbar.style.top = '-10vh'; // Hide navbar (negative of navbar height)
        } else {
            // Scrolling up or at top
            navbar.style.top = '0'; // Show navbar
        }
        
        lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos; // For Mobile or negative scrolling
    });

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