const User = require("../models/User");

const getPing = async (req, res) => {
  try {
    const results = await User.find({});
    res.status(200).json({ message: "success", data: results });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getPing,
};
