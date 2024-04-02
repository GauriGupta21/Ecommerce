const express = require("express");
const UserSchema = require("../models/UserSchema");
const JWT = require("jsonwebtoken");
const decodeToken = require("../middlewares/decodeToken");
const router = express.Router();

const JWT_SECRET_KEY = "srgkuvnskni,ri8HBYV@$BUBygnvmknibuhbm@IU#Gmbjwaíµjñßø";

//signup the user
router.post("/createuser", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  if (!username || !email || !password) {
    return res.json({ success: false, error: "Check credentials" });
  }
  let user = await UserSchema.findOne({ email: req.body.email });
  if (user) {
    return res.json({ success: false, error: "duplicate user" });
  }

  user = await UserSchema.create({
    username,
    email,
    password,
    role,
  });
  const data = {
    user: {
      id: user.id,
    },
  };
  const authToken = JWT.sign(data, JWT_SECRET_KEY);
  return res.json({
    success: true,
    message: "Successfully signed up",
    user,
    authToken,
  });
});

//login the user
router.post("/login", async (req, res) => {
  let user = await UserSchema.findOne({ email: req.body.email });
  if (!user) {
    return res.json({ success: false, error: "invalid user" });
  }

  if (user.password != req.body.password) {
    return res.json({ success: false, error: "invalid password" });
  }

  const data = {
    user: {
      id: user.id,
    },
  };
  const authToken = JWT.sign(data, JWT_SECRET_KEY);
  return res.json({
    success: true,
    message: "Successfully Logged In",
    user,
    authToken,
  });
});
//to get single user
router.get("/getsingleuser", decodeToken, async (req, res) => {
  const user = await UserSchema.findOne({ _id: req.user.id });
  return res.json({ success: true, message: "All users data", user });
});
module.exports = router;
