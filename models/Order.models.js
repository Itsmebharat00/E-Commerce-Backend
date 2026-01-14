/** @format */

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    items: {
      type: [],
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    address: {
      type: {},
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
