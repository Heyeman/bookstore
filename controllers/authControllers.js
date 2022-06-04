const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
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
  res.send("sign in ");
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
