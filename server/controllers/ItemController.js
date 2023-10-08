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
    const newItem = new Item({
      title,
      itemType,
      description,
      price,
      discountPercentage,
      images,
      rating,
    });

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
