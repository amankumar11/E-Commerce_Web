import React from "react";
import "../assets/css/card.css";

const LandingCard = ({
  productName,
  imageUrl,
  price,
  height,
  width,
  imgHeight,
}) => {
  const cardStyle = {
    height: height || "550px",
    width: width || "350px",
  };

  const imgStyle = {
    height: imgHeight || "320px",
  };

  return (
    <div className="landing-card" style={cardStyle}>
      <img src={imageUrl} alt={productName} style={imgStyle} />
      <div className="product-details">
        <p className="product-name">{productName}</p>
        <p className="product-price">{price}</p>
        <button className="cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default LandingCard;
