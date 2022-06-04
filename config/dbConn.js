const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Database connected successfully".cyan.underline);
  } catch (err) {
    console.log("Can't connect to the database with the link".red);
  }
};

module.exports = { dbConnect };
