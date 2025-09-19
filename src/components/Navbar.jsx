import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/kgflogo.png';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar" id="myNavbar">
        <img src={logo} className='logo' alt="" />
        <nav className="nav-links">
          <a href="#home">Home page</a>
          <a href="#about">About Us</a>
        </nav>
        <nav>
          <Menu 
            color="#121568" 
            className='hamburger' 
            onClick={toggleMenu}
          />
        </nav>
      </header>
      
      <div className={`nav-modal ${isMenuOpen ? 'nav-modal-open' : ''}`}>
        <X color="#121568" className='x' onClick={closeMenu} />
        <a href="#home" onClick={closeMenu}>Home page</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
      </div>
      
      {/* Optional backdrop overlay */}
      {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}
    </>
  )
}

export default Navbar;
