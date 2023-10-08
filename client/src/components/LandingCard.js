import React from "react";
import "../assets/css/landingCard.css";

const LandingCard = ({ productName, imageUrl, price }) => {
  return (
    <div className="landing-card">
      <img src={imageUrl} alt={productName} height="400px" />
      <div className="product-details">
        <p className="product-name">{productName}</p>
        <p className="product-price">{price}</p>
        <button className="cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default LandingCard;
