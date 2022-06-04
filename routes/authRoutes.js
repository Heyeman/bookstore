const express = require("express");

const router = express.Router();

// Auth/login and auth/register - Post
router.post("/login", loginController);
router.post("/register", signupController);

// auth/profile - GET – show profile
// auth/profile - PUT - update profile
router
  .route("/profile")
  .get(protector, myProfile)
  .put(protector, updateProfile);

module.exports = router;
