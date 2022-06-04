const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
//login controller
const loginController = asyncHandler(async (req, res) => {
  //required params - email and password

  res.send("login");
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
