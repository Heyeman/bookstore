const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully".cyan.underline);
  } catch (err) {
    console.log("Can't connect to the database with the link".red, err);
  }
};

module.exports = { dbConnect };
