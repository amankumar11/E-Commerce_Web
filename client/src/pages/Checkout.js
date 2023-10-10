import React from "react";
import "../assets/css/checkout.css";
import bank from "../assets/img/bank.png";
import FetchTotalAmount from "../api/fetchTotalAmount";

const Checkout = () => {
  const totalAmount = FetchTotalAmount();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <h1>Billing Details</h1>
        <div className="form-div">
          <form className="login-form checkout-form">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Street Address" />
            <input type="text" placeholder="Town/City" required />
            <input type="text" placeholder="Phone number" required />
            <input type="url" placeholder="Email Address" required />
          </form>
        </div>
      </div>
      <div className="checkout-right">
        <div className="amount-div">
          <div className="amount-container">
            <p>Subtotal:</p>
            <p>{totalAmount}</p>
          </div>
          <div className="amount-container">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="amount-container amount-total">
            <p>Total:</p>
            <p>{totalAmount}</p>
          </div>
        </div>
        <div className="amount-div">
          <div className="radio-div">
            <input type="radio" value="Bank" />
            Bank
            <img src={bank} alt="bank" width="200px"></img>
          </div>
          <div className="radio-div">
            <input type="radio" value="COD" />
            Cash on Delivery
          </div>
          <div className="input-div">
            <input type="text"></input>
            <button>Apply Coupon</button>
          </div>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
