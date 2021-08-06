const asyncHandler = require("express-async-handler");
const User = require("../Models/user");
const token = require("../utils/token")

// User registration
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

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      password: user.password,
      token:token(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User registration error occured");
  }
});

// User authentication
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:token(user._id),
    });
  }
  else {
    res.status(400);
    throw new Error("User not registred");
  }


});

module.exports = { register, loginUser };
