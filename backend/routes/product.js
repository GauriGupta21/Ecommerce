const express = require("express");
const ProductSchema = require("../models/ProductSchema");
const router = express.Router();

router.post("/CreateProduct", async (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const stock = Number(req.body.stock);
  const price = Number(req.body.price);
  console.log(req.body);
  const product = await ProductSchema.create({
    name,
    image,
    description,
    price,
    stock,
  });
  product.save();
  res.send(product);
});
router.delete("/DeleteProduct", async (req, res) => {
  let product = await ProductSchema.findById(req.body.id);
  if (!product) {
    return res.send("product not found");
  }
  product = await ProductSchema.findByIdAndDelete(req.body.id);
  res.send("delete");
});
router.get("/getAllProduct", async (req, res) => {
  const product = await ProductSchema.find();
  res.send(product);
});
router.put("/updateProduct", async (req, res) => {
  let product = await ProductSchema.findById(req.body.id);
  if (!product) {
    return res.json({ success: false, error: "product doesn't exist" });
  }
  const newProductDetails = {};
  //jo bhi aaye name ya kuch bhi usko hi change karo "if (req.body.name)" se pta chalega ki kya aaya hai
  if (req.body.name) newProductDetails.name = req.body.name;
  if (req.body.image) newProductDetails.image = req.body.image;
  if (req.body.description)
    newProductDetails.description = req.body.description;
  if (req.body.stock) newProductDetails.stock = req.body.stock;
  if (req.body.price) newProductDetails.price = req.body.price;
  product = await ProductSchema.findByIdAndUpdate(
    // id se product dhundho or usko new vale data se replace maar do
    req.body.id,
    {
      $set: newProductDetails,
    },
    { new: true }
  );
  res.json({ success: true, message: "succesfully updated", product });
});
module.exports = router;
