const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

module.exports = asyncHandler(async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer")) {
    res.status(401);
    throw new Error("Unauthorized");
  }
  const token = bearer.split(" ")[1];
  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    const userExists = await User.findById(decode.id).select("-password");
    req.user = userExists;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(403);
      throw new Error("Expired token");
    }
    res.status(401);
    throw new Error("Unauthorized");
  }
});
