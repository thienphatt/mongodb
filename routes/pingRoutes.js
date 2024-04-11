const { getPing } = require("../conrollers/pingController");

const router = require("express").Router();
router.get("/", getPing);

module.exports = router;
