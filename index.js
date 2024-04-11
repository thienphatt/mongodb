const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const PORT = 5000;
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const pingRoutes = require("./routes/pingRoutes");
const User = require("./models/User");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("products api running new deploy");
});

// test
app.use("/ping", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// /products
app.use("/products", productRoutes);
// /users
app.use("/users", userRoutes);

app.listen(8080, async () => {
  console.log("Server is listenin on PORT :" + PORT);
});
