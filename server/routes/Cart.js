const express = require("express");

const { addToCart, getCart } = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addToCart);

router.get("/", getCart);

module.exports = router;
