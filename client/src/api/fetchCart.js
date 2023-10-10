import axios from "axios";

const fetchCart = async () => {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const userEmail = user ? user.email : "";

  try {
    const response = await axios.get("/api/cart");
    const filteredCartItems = response.data.cart.filter(
      (item) => item.userEmail === userEmail
    );
    return filteredCartItems;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

export default fetchCart;
