const express = require("express");

const {
  addToCart,
  getCart,
  deleteCartItem,
  updateCartItemQuantity,
} = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addToCart);

router.get("/", getCart);

router.delete("/:_id", deleteCartItem);

router.patch("/:_id/update", updateCartItemQuantity);

module.exports = router;
