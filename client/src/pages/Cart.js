import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import "../assets/css/cart.css";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const userEmail = user ? user.email : "";

  useEffect(() => {
    axios
      .get("/api/cart")
      .then((response) => {
        const filteredCartItems = response.data.cart.filter(
          (item) => item.userEmail === userEmail
        );
        setCartItems(filteredCartItems);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, [userEmail]);

  const handleDeleteItem = async (_id) => {
    try {
      await axios.delete(`/api/cart/${_id}`);

      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item._id !== _id)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-left">
          <h1>Your Bag</h1>
          {cartItems.map((item) => (
            <CartCard
              id={item._id}
              itemName={item.productName}
              price={item.price}
              imageUrl={item.images}
              onDelete={handleDeleteItem}
            />
          ))}
        </div>
        <div className="cart-right">
          <div className="checkout-card">
            <div className="amount-box">
              <h2>Amount Payable</h2>
              <h2>Amount</h2>
            </div>
            <div className="amount-box">
              <h2>Tax SA</h2>
              <h2>Amount</h2>
            </div>
            <div className="amount-box total-box">
              <h2>Total</h2>
              <h2>Amount</h2>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
