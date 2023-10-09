import React, { useState } from "react";
import "../assets/css/card.css";
import axios from "axios";

const LandingCard = ({
  productName,
  imageUrl,
  price,
  height,
  width,
  imgHeight,
  itemType,
}) => {
  const cardStyle = {
    height: height || "550px",
    width: width || "350px",
  };

  const imgStyle = {
    height: imgHeight || "320px",
  };

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const userEmail = user ? user.email : "";

  const [itemToAdd, setItemToAdd] = useState({
    userEmail: userEmail,
    productName: productName,
    itemType: itemType,
    quantity: 1,
    price: price,
    images: imageUrl,
  });

  const handleAddToCart = async () => {
    try {
      const response = await axios.post("/api/cart/add", itemToAdd);

      console.log("Item added to cart:", response.data);

      setItemToAdd({
        ...itemToAdd,
        quantity: 1,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="landing-card" style={cardStyle}>
      <img src={imageUrl} alt={productName} style={imgStyle} />
      <div className="product-details">
        <p className="product-name">{productName}</p>
        <p className="product-price">{price}</p>
        <button className="cart-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default LandingCard;
