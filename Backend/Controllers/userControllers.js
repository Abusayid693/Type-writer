const asyncHandler = require("express-async-handler");
const User = require("../Models/user");

const register = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  res.json({
    name,
    email,
  });
});

module.exports = { register };
