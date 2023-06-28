const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error');
const cors = require('cors');
const User = require('./Models/User');
const bodyParser = require("body-parser");

//Load env vars
dotenv.config({path: './.env'});


connectDB();
console.log("Executed")



const app = express();

//Body parser
app.use(express.json());

//Enable CORS
app.use(cors());

const jsonParser = bodyParser.json();

const sendTokenResponse = (user, statusCode, res) => {
  //Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({success: true, token});
};

app.post("/api/register",jsonParser,async(req,res)=>{
  const {name, email, password, role} = req.body;

  //Create user
  const user = await User.create({
    name,
    email,
    password,
    role
  });

  sendTokenResponse(user, 200, res);
})

app.use(errorHandler);

const PORT = 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow
  )
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});