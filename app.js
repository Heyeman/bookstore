const { urlencoded } = require("express");
const express = require("express");

const dotenv = require("dotenv").config();
const colors = require("colors");
//intances and variables
const app = express();
const port = process.env.PORT || 5000;
const { dbConnect } = require("./config/dbConn");
dbConnect();
=======
const cors = require('cors')
const morgan = require('morgan')
const paginate = require('express-paginate')

//intances and variables
const app = require("express")();
const port = process.env.PORT || 3000;


//app configurations
app.use(morgan())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./middlewares/errorHandler")); //custom error handler to send json errors

=======
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
