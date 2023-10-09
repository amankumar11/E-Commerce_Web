const Cart = require("../models/cart");

const addToCart = async (req, res) => {
  try {
    const {
      userEmail,
      productName,
      itemType,
      quantity,
      price,
      discountPercentage,
      images,
      taxes,
      totalAmount,
    } = req.body;

    let cartItem = await Cart.findOne({ userEmail, productName });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new Cart({
        userEmail,
        productName,
        itemType,
        quantity,
        price,
        discountPercentage,
        images,
        taxes,
        totalAmount,
      });
    }

    console.log(cartItem);

    await cartItem.save();

    res
      .status(201)
      .json({ message: "Item added to cart successfully", cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCart = async (req, res) => {
  try {
    const { email } = req.params;

    const userCart = await Cart.find({ email });

    res.status(200).json({ cart: userCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedItem = await Cart.findOneAndRemove({
      _id,
    });

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCartItemQuantity = async (req, res) => {
  const { _id, newQuantity } = req.body;

  try {
    const cartItem = await Cart.findById({ _id });

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    if (
      typeof newQuantity !== "number" ||
      newQuantity < 1 ||
      !Number.isInteger(newQuantity)
    ) {
      return res.status(400).json({ message: "Invalid quantity" });
    }
    cartItem.quantity = newQuantity;
    await cartItem.save();

    return res
      .status(200)
      .json({ message: "Cart item quantity updated successfully", cartItem });
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addToCart,
  getCart,
  deleteCartItem,
  deleteCartItem,
  updateCartItemQuantity,
};
