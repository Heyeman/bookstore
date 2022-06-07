const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { User } = require("../models/userModel");
const { getToken } = require("../helpers/genJWT");

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
    throw new Error("Email, username and password should be filled");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashSalt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, hashSalt);
  const newUser = await User.create({
    email,
    password,
    username,
    facebookLink,
    telegramLink,
    phoneNumber,
    whatsapp,
  });
  if (newUser) {
    const accessToken = await getToken({ id: newUser._id });
    const refreshToken = await getToken({ id: newUser._id }, true);

    res.status(200).json({
      id: newUser._id,
      username,
      email,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(400);
    throw new Error("Faulty user data entered");
  }
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
