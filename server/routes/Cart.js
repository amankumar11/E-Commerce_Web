const express = require("express");

const {
  addToCart,
  getCart,
  deleteCartItem,
} = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addToCart);

router.get("/", getCart);

router.delete("/:_id", deleteCartItem);

module.exports = router;
