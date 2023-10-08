import React from "react";
import Logo from "../assets/img/plotline_logo.svg";
import "../assets/css/navbar.css";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-items">
          <img src={Logo} alt="Logo" width="30%"></img>
          <a>Products</a>
          <a>Services</a>
        </div>
        <div className="navbar-profile-items">
          <a>Cart</a>
          <button onClick={handleClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
