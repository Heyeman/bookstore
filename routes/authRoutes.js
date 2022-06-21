const express = require("express");
//router instance
const router = express.Router();

//external methods
const {
  loginController,
  signupController,
  myProfile,
  updateProfile,
} = require("../controllers/authControllers");
const protector = require("../middlewares/protector");

// Auth/login and auth/register - Post
router.post("/login", loginController);
router.post("/register", signupController);

// auth/profile - GET – show profile
// auth/profile - PUT - update profile
router
  .route("/profile")
  .get(protector, myProfile)
  .put(protector, updateProfile);
router.route("*", (req, res) => {
  res.status(404).send("Not found");
});

module.exports = router;
