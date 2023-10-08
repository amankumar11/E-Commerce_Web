import React from "react";
import Logo from "../assets/img/plotline_logo.svg";
import "../assets/css/navbar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="navbar-container">
      {user && (
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
      )}
      {!user && (
        <div className="navbar">
          <div className="navbar-items">
            <img src={Logo} alt="Logo" width="30%"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
