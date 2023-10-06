import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>My Portfolio</h2>
      <div className="navItems">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default Navbar;
