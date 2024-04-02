const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  stock: Number,
});
module.exports = mongoose.model("ProductSchema", ProductSchema);
