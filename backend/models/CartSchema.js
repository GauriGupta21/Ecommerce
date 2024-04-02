const mongoose = require("mongoose");
const { Schema } = mongoose;
const CartSchema = new Schema({
  shippingInfo: {
    address: String,
    city: String,
    state: String,
    country: String,
    pincode: Number,
    phone: Number,
  },
  orderItem: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String,
      product: {
        type: mongoose.Schema.ObjectId, // ek schema ko dusre schema ki id diya hai
        ref: "ProductSchema", //ye bataya hai kon si schema se link karna hai
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId, // ek schema ko dusre schema ki id diya hai
    ref: "UserSchema", //ye bataya hai kon si schema se link karna hai
  },
  totalPrice: Number,
  orderStatus: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("CartSchema", CartSchema);
