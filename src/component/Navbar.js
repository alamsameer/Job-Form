import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from '../css/Navbar.css';
import image from '../images/codalien_logo.svg';

const Navbar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <Link to="/">
            <img src={image} alt="Codalien Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;