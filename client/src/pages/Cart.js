import React from "react";
import CartCard from "../components/CartCard";
import "../assets/css/cart.css";

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-left">
          <h1>Your Bag</h1>
          <CartCard />
          <CartCard />
          <CartCard />
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
