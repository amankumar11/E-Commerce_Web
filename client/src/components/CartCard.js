import React from "react";
import QuantityCounter from "./QuantityCounter";
import "../assets/css/cartcard.css";

const CartCard = () => {
  return (
    <div className="cart-card">
      <div className="cart-card-left">
        <img></img>
      </div>
      <div className="cart-card-right">
        <p>Item Name</p>
        <QuantityCounter />
        <p>Price</p>
      </div>
    </div>
  );
};

export default CartCard;
