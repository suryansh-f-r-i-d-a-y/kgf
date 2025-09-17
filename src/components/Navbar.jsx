import React from 'react';
import './Navbar.css';
import logo from '../assets/kgflogo.png';
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        const navbar = document.getElementById('myNavbar');
    
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    
          if (currentScrollPos > lastScrollTop && currentScrollPos > 100) {
            navbar.style.top = '-10vh'; // Hide navbar
          } else {
            navbar.style.top = '0'; // Show navbar
          }
    
          lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className="navbar" id="myNavbar">
          <img src={logo} className='logo' alt="" />
            <nav className="nav-links">
                <a href="#home">Home page</a>
                <a href="#about">About Us</a>
            </nav>
        </header>
    )
}

export default Navbar