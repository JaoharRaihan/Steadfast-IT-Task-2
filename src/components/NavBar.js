import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" aria-label="Homepage">
          <img src="https://steadfast.com.bd/landing-page/asset/images/logo/logo.svg" alt="MyWebsite Logo" className="logo" />
        </a>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} aria-label="Main Navigation">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
        <div
          id="mobile-nav-toggle"
          className="mobile-nav-toggle"
          aria-label="Toggle mobile navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776; {/* Hamburger icon */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
