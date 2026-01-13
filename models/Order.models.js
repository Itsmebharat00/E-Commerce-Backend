/** @format */

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    items: [
      {
        _id: String,
        title: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    totalAmount: Number,
    address: {
      label: String,
      address: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
