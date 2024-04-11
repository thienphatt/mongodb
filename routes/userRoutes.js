const { getProducts } = require("../conrollers/productController");
const { registerUser, loginUser } = require("../conrollers/userController");

const router = require("express").Router();

// /users/register
router.get("/", getProducts);
router.post("/register", registerUser);
router.post("/login", loginUser);
// router.get('/', getProducts);

module.exports = router;
