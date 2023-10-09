import React from "react";
import "../assets/css/amountcard.css";

const ItemAmountCard = () => {
  return (
    <div className="amount-card">
      <div className="amount-box">
        <h3>Item Name</h3>
        <p>Amount</p>
      </div>
      <div className="amount-box">
        <p>Tax Name</p>
        <p>Amount</p>
      </div>
    </div>
  );
};

export default ItemAmountCard;
