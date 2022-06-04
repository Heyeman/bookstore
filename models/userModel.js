const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  //email, password, username, social links
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  facebookLink: String,
  telegramLink: String,
  phoneNumber: String,
  whatsapp: String,
});

const User = mongoose.model("users", userSchema);

module.exports = { User };
