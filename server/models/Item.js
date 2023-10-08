const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: { type: String, required: true, unique: true },
  itemType: { type: String, required: true },
  description: { type: String },
  price: {
    type: Number,
    min: [1, "wrong min price"],
    max: [1000000, "wrong max price"],
  },
  discountPercentage: {
    type: Number,
    min: [1, "wrong min discount"],
    max: [99, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max price"],
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
