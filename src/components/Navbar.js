// Navbar.js
import React from 'react';
import '../components/assets/Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#home">Springdale Public School</a>
      <div className="navbar-links">
        <Link to="/">Home</Link>
       
        <Link to="/aboutus">AboutUs</Link>
        <a href="/academics">Academics</a>
        <a href="/admissions">Admission</a>
        <a href="/faculty">Faculty</a>
        <a href="/student">Students</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
