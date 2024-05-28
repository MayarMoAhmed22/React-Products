// src\Components\NavBar\NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">My Website</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
