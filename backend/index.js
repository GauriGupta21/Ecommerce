const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("Mongo DB is connected");
  })
  .catch(() => {
    console.log();
  });
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.use("/cart", require("./routes/cart"));
const port = 8000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
