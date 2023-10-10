import { useEffect, useState } from "react";
import fetchCart from "./fetchCart";

const FetchTotalAmount = () => {
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

  const totalAmount = cartItems.reduce((total, item) => {
    if (item.itemType === "product") {
      return total + 200 + item.totalAmount * item.quantity;
    } else {
      return total + 100 + item.totalAmount * item.quantity;
    }
  }, 0);

  return totalAmount;
};

export default FetchTotalAmount;
