import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-img" /> School Bus Management
      </div>
    </nav>
  );
};

export default Navbar;
