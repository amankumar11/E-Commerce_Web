const Item = require("../models/Item");

const addItem = async (req, res) => {
  try {
    const {
      title,
      itemType,
      description,
      price,
      discountPercentage,
      images,
      rating,
    } = req.body;

    let taxType;
    let taxAmount;

    if (itemType === "product") {
      if (price > 1000 && price <= 5000) {
        taxType = "PA";
        taxAmount = price * 0.12;
      } else if (price > 5000) {
        taxType = "PB";
        taxAmount = price * 0.18;
      }
      taxAmount = taxAmount + 200;
    } else if (itemType === "service") {
      if (price > 1000 && price <= 8000) {
        taxType = "SA";
        taxAmount = price * 0.1;
      } else if (price > 8000) {
        taxType = "SB";
        taxAmount = price * 0.15;
      }
      taxAmount = taxAmount + 100;
    }

    const newItem = new Item({
      title,
      itemType,
      description,
      price,
      discountPercentage,
      images,
      rating,
      taxes: [{ taxType, taxAmount }],
    });

    newItem.totalAmount = price + taxAmount;

    await newItem.save();
    res
      .status(201)
      .json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ error: "Validation error", details: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addItem, getItems };
