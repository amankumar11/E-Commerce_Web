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
    type: String,
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [1, "wrong min discount"],
    max: [99, "wrong max discount"],
  },
  images: { type: String, required: true },
});

// const virtual = cartSchema.virtual("id");
// virtual.get(function () {
//   return this._id;
// });
// cartSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

module.exports = mongoose.model("Cart", cartSchema);
