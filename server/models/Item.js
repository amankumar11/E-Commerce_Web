const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: { type: String, required: true, unique: true },
  itemType: { type: String, required: true },
  description: { type: String },
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
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max price"],
    default: 0,
  },
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

module.exports = mongoose.model("Item", ItemSchema);
