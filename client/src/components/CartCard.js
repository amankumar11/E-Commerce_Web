import React from "react";
import QuantityCounter from "./QuantityCounter";
import "../assets/css/cartcard.css";
import sofa from "../assets/img/products/sofa-grey.webp";

const CartCard = () => {
  return (
    <div className="cart-card">
      <div className="cart-card-container">
        <div className="cart-card-left">
          <img src={sofa}></img>
        </div>
        <div className="cart-card-right">
          <p className="item-name">Item Name</p>
          <QuantityCounter />
          <p className="item-price">Price</p>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
