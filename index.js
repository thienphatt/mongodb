const express = require("express");
const app = express();
require("dotenv").config();
// require("./db");
const PORT = process.env.PORT || 8080;
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const pingRoutes = require("./routes/pingRoutes");
const mongoose = require("mongoose");
const User = require("./models/User");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("products api running new deploy");
});

// test
app.use("/ping", pingRoutes);

// /products
app.use("/products", productRoutes);
// /users
app.use("/users", userRoutes);

app.listen(8080, async () => {
  try {
    await mongoose.connect(process.env.DBHOST);
    console.log("Connect DB success");
  } catch (error) {
    console.log("Connect DB failed", error);
  }

  console.log("Server is listenin on PORT :" + PORT);
});
