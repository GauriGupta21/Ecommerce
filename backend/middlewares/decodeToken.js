const JWT = require("jsonwebtoken");
const JWT_SECRET_KEY = "srgkuvnskni,ri8HBYV@$BUBygnvmknibuhbm@IU#Gmbjwaíµjñßø";

const decodeToken = (req, res, next) => {
  let token = req.header("authToken");
  if (!token) {
    return res.json({ success: false, error: "Invalid Token" });
  }
  const data = JWT.verify(token, JWT_SECRET_KEY); // for decrypting
  req.user = data.user;
  next();
};
module.exports = decodeToken;
