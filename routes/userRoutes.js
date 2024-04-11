const {
  registerUser,
  loginUser,
  getUsers,
} = require("../conrollers/userController");

const router = require("express").Router();

// /users/register
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);

module.exports = router;
