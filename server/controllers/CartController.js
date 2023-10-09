const Cart = require("../models/cart");
// const mongoose = require("mongoose");

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

// const getCart = async (req, res) => {
//   try {
//     const { email } = req.params;

//     const userCart = await Cart.find({ email });

//     res.status(200).json({ cart: userCart });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

module.exports = { addToCart };
