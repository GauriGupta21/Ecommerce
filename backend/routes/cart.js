const express = require("express");
const CartSchema = require("../models/CartSchema");
const decodeToken = require("../middlewares/decodeToken");
const router = express.Router();

router.post("/addToCart", decodeToken, async (req, res) => {
  const cart = await CartSchema.create({
    shippingInfo: req.body.shippingInfo,
    orderItem: req.body.orderItem,
    user: req.user.id,
    totalPrice: req.body.totalPrice,
    orderStatus: "Processing",
  });
  res.send(cart);
});
router.post("/cancelOrder", async (req, res) => {
  const order = await CartSchema.findById(req.body.id);
  // console.log(req.body.id);
  // console.log(order);
  if (!order) {
    return res.json({ message: "not found" });
  }
  order.orderStatus = "Cancelled";
  order.save();
  res.json({ order });
});
router.post("/getAllOrder", async (req, res) => {
  const order = await CartSchema.find();
  res.json({ order });
});
module.exports = router;
