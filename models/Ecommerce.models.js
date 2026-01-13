/** @format */

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      name: {
        type: String,
        required: true,
        enum: [
          "men's clothing",
          "women's clothing",
          "jewelery",
          "electronics",
          "other",
        ],
      },
      image: {
        type: String,
      },
    },

    image: {
      type: String,
      required: true,
    },

    rating: {
      rate: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
        min: 0,
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
