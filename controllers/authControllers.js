const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { User } = require("../models/userModel");
//login controller
const loginController = asyncHandler(async (req, res) => {
  //required params - email and password
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(400);
    throw new Error("Both email and password should be filled");
  }

  res.json({ email, password });
});
//register controller
const signupController = asyncHandler(async (req, res) => {
  const {
    email,
    password,
    username,
    facebookLink,
    telegramLink,
    phoneNumber,
    whatsapp,
  } = req.body;
  if (!(email && password && username)) {
    res.status(400);
    throw new Error("Both email and password should be filled");
  }
  const existingUser = await User.find({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const newUser = await User.create({
    email,
    password,
    username,
    facebookLink,
    telegramLink,
    phoneNumber,
    whatsapp,
  });
});
//show profile
const myProfile = asyncHandler(async (req, res) => {});

//update profile
const updateProfile = asyncHandler(async (req, res) => {});

module.exports = {
  loginController,
  signupController,
  myProfile,
  updateProfile,
};
