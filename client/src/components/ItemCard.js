import React, { useState } from "react";
import "../assets/css/card.css";
import axios from "axios";

const ItemCard = ({
  productName,
  imageUrl,
  price,
  height,
  width,
  imgHeight,
  itemType,
  taxes,
  totalAmount,
}) => {
  const cardStyle = {
    height: height || "500px",
    width: width || "300px",
  };

  const imgStyle = {
    height: imgHeight || "280px",
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
    taxes: taxes,
    totalAmount: totalAmount,
  });

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post("/api/cart/add", itemToAdd);

      console.log("Item added to cart:", response.data);

      setIsAdded(true);

      setTimeout(() => {
        setIsAdded(false);
      }, 2000);

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
        <div className="item-fav-div">
          <p className="product-name">{productName}</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0UlEQVR4nO2YX2iNcRjHPzubMTv5Uy5OLhRFMW6QImUouVK4cEMsF7PCMg1LanLBHS2lFrnjhraapPyJK4mSI7Yp/3bjkhgblulXz1tPT2fn/XPec95D76fees/e3/N9vr/ffv8hJSUlJaVCzAVagH5gCBgFxoB3wDVgO1AbQMeV2QFcl9gx0XKafcA+YE6cxhuALuALMOnzDAJri2itkzJ+Op+BE8CMUs3PB54GSKif31LhGqWTAU7KtzBaT8RDZPMjRvAFcBhYBjRKC7n3o8AHU7ZHaV00394DR4ClouG0moB2IG/KjkSpRINp+XGgVVqyWEyPSd4NnDZ/u+DTNTLAAcmp/xOhulOXMb8hRGxnkS7REUKn2VTiWJjZRg9Y1/JhuVzAfG8EnTYzsAPNTi2mzxfrNlMxE3ipdPLSxcJSa8bE3iBBfSrADdioLJYpc1Deo9Ku/NwMEjCsAtwMkzRNyo9b7Hz5pgKyJE9W+XHefBlVAbNIntlhKzCkAraQPFuVn9dBAnrDDpoy06/8XAoSsFkF/AHWkByrxIPnxy1uvtTI/O8F3Tcbs0qRAR4oH8/DBG8yq6jbrFWaTuMh9Hi8qoJ/VbgrrQR+qvxXoog0yqj3RNzpKUf5ycl228v7SrYmkVgB/FBiz8q8uGUlh5fP5V5equhOYEKJ3gLqiJ860fbyTMjZORZazYAaAKbHJQ5MA26YHIeImTMmgVtg6mPQrTeL1aTkKgu2ErdLvDmoL2D+PGWm2yS8E/Gw4rrgQKXNe5wyie+GnOpc2XtJmfc4bgw8DLj9dmUemdizJESb2Wy5OXyez4XBY2P+HAlz0FQiP8WKnTMHfRcT+1QZld3m2tBtOxap7wuAN2aR2k+VsUs2fZ7Jj8ASYCHw1pjfQ5WyzdymfZLH+z0uZaqaZuBrgZu571Vyxg7EenM96W4TNvKPsVoG7rC8p6SkpPyH/AXXK0swH4PsJQAAAABJRU5ErkJggg=="
            width="25px"
            height="25px"
            alt="fav"
          ></img>
        </div>

        <p className="product-price">₹{price}</p>
        <button
          className={`cart-btn ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
