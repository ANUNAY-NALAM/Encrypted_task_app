const express = require('express')
// const cookieParser = require('cookie-parser')
const connectDB= require('./db/connectDB')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()


app.use(express.static('public'))
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

 
// app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();



/*-----------*/

var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

console.log("ciphertext::"+ciphertext)
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log("originalText::"+ originalText);
