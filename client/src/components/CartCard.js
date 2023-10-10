import React from "react";
import QuantityCounter from "./QuantityCounter";
import "../assets/css/cartcard.css";

const CartCard = ({
  id,
  itemName,
  itemType,
  price,
  quantity,
  imageUrl,
  onDelete,
  onQuantityUpdate,
}) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleIncrease = () => {
    onQuantityUpdate(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityUpdate(id, quantity - 1);
    }
  };

  return (
    <div className="cart-card">
      <div className="cart-card-container">
        <div className="cart-card-left">
          <img src={imageUrl} alt="item-pic"></img>
        </div>
        <div className="cart-card-right">
          <p className="item-name">{itemName}</p>
          <p className="item-type">{itemType}</p>
          <QuantityCounter
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <p className="item-price">₹{price}</p>
          <button className="delete-btn" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
