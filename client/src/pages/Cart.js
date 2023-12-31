import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import "../assets/css/cart.css";
import axios from "axios";
import ItemAmountCard from "../components/ItemAmountCard";
import fetchCart from "../api/fetchCart";
import FetchTotalAmount from "../api/fetchTotalAmount";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart()
      .then((filteredCartItems) => {
        setCartItems(filteredCartItems);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

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

  const updateQuantity = (ItemId, newQuantity) => {
    const updatedProducts = cartItems.map((product) => {
      if (product._id === ItemId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCartItems(updatedProducts);

    axios
      .patch(`/api/cart/${ItemId}/update`, { ItemId, newQuantity })
      .then((response) => {
        console.log("Cart item quantity updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating cart item quantity:", error);
      });
  };

  const totalAmount = FetchTotalAmount();

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-left">
          <h1>Your Bag</h1>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h3>Hey, it feels so light!</h3>
              <p>There is nothing in your bag. Let's add some items</p>
            </div>
          ) : (
            <div></div>
          )}
          {cartItems.map((item) => (
            <CartCard
              id={item._id}
              itemName={item.productName}
              itemType={item.itemType}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.images}
              onDelete={handleDeleteItem}
              onQuantityUpdate={updateQuantity}
            />
          ))}
          <a className="return-shop-btn" href="/shop">
            Return to Shop
          </a>
        </div>
        <div className="cart-right">
          <div className="checkout-card">
            <h2>Amount Payable</h2>
            {cartItems.map((item) => (
              <ItemAmountCard
                itemName={item.productName}
                price={item.price}
                taxes={item.taxes}
                itemType={item.itemType}
                totalAmount={item.totalAmount}
                quantity={item.quantity}
              />
            ))}
            <div className="total-box">
              <h2>Total</h2>
              <h2>{totalAmount.toFixed(2)}</h2>
            </div>
            <a className="checkout-btn" href="/checkout">
              Proceed to Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
