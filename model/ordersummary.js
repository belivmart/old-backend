const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
  singleproductprice: {
    type: Number,
  },
  sallerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Saller",
  },
});

module.exports = mongoose.model("OrderSummary", orderSchema);
