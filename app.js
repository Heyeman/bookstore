const { urlencoded } = require("express");
const express = require("express");
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const dotenv = require("dotenv").config({path: './config/config.env'});
const paginate = require('express-paginate')
//db connection
connectDB()
//intances and variables
const app = require("express")();
const port = process.env.PORT || 3000;

//app configurations
app.use(morgan())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(paginate.middleware(10,100));
//route config
app.use("/auth", require("./routes/authRoutes"));
app.use("/books", require("./routes/bookRoutes"));
app.use("/review", require('./routes/reviewRoute'))
//server

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}`);
});
