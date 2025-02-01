const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String, required: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
