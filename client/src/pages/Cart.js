import React from "react";
import CartCard from "../components/CartCard";

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-left">
          <CartCard />
        </div>
        <div className="cart-right"></div>
      </div>
    </div>
  );
};

export default Cart;
