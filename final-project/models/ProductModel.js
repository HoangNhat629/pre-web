const mongoose = require("mongoose");
// cau truc collection Product
let ProductSchema = new mongoose.Schema(
  {
    sku: String,
    title: String,
    description: String,
    availableSize: Array,
    style: String,
    price: Number,
    installments: Number,
    currencyID: String,
    currencyFormat: String,
    isShippingFree: Boolean,
    imgLink: String
  },
  {
    _id: true,
    timestamps: true
  }
);
// ProductModel dieu khien collection `products`
let ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
