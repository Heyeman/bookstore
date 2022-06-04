const asyncHandler = require("express-async-handler");
module.exports = asyncHandler(async (req, res) => {
  //required params - email and password

  res.send("protector");
});
