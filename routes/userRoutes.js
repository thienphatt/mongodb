const {
  registerUser,
  loginUser,
  getUsers,
} = require("../conrollers/userController");

const router = require("express").Router();

// /users/register
router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
// router.get('/', getProducts);

module.exports = router;
