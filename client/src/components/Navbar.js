import React from "react";
import Logo from "../assets/img/plotline_logo.svg";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-items">
          <img src={Logo} alt="Logo" width="30%"></img>
          <a>Products</a>
          <a>Services</a>
        </div>
        <div className="navbar-profile-items">
          <a>Profile</a>
          <a>Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
