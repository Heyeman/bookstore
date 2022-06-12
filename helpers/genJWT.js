const jwt = require("jsonwebtoken");

const getToken = (id, isRefreshToken = false) => {
  let duration = isRefreshToken ? "1y" : "15m";
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: duration });
};
module.exports = { getToken };
