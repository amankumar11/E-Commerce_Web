import React from "react";
import QuantityCounter from "./QuantityCounter";
import "../assets/css/cartcard.css";

const CartCard = ({ id, itemName, price, imageUrl, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="cart-card">
      <div className="cart-card-container">
        <div className="cart-card-left">
          <img src={imageUrl} alt="item-pic"></img>
        </div>
        <div className="cart-card-right">
          <p className="item-name">{itemName}</p>
          <QuantityCounter />
          <p className="item-price">{price}</p>
          <button className="delete-btn" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
