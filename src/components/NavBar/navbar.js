import React from 'react';
import './navbar.css';

const Navbar = ({ setCurrentPage }) => { // Receive setCurrentPage as a prop
  return (
    <div className="navbar">
      <h2>My Portfolio</h2>
      <div className="navItems">
        <h2 onClick={() => setCurrentPage('home')}>Home</h2>
        <h2 onClick={() => setCurrentPage('about')}>About</h2>
        <h2 onClick={() => setCurrentPage('projects')}>Projects</h2>
        <h2 onClick={() => setCurrentPage('contact')}>Contact</h2>
      </div>
    </div>
  );
};

export default Navbar;
