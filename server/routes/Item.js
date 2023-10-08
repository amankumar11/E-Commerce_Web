const express = require("express");

const { addItem } = require("../controllers/ItemController");

const router = express.Router();

router.post("/item/add", addItem);

module.exports = router;
