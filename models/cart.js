const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  productName: { type: String, required: true },
  itemType: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [1, "wrong min discount"],
    max: [99, "wrong max discount"],
  },
  images: { type: String, required: true },
  taxes: [
    {
      taxType: { type: String },
      taxAmount: { type: Number },
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
