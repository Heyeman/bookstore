const { urlencoded } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();

//intances and variables
const app = express();
const port = process.env.PORT || 5000;

//app configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./middlewares/errorHandler")); //custom error handler to send json errors

//route config
app.use("/auth", require("./routes/authRoutes"));
// app.use("/books", require("./routes/bookRoutes"));

//server

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}`);
});
