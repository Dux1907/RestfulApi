const express = require("express");
const mongoose = require("mongoose");
const app = express();
const newError = require('http-errors')
const dotenv = require('dotenv').config()
console.log(dotenv.parsed)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
      process.env.MONGO_URI, {
        DbName:process.env.DB_NAME
    }
  )
  .then(() => {
    console.log("connected");
  });
const Route = require("./Routes/Route");
app.use("/products", Route);

app.use((req, res, next) => {
  next(newError("Can't find anything!"));
});

mongoose.connection.on(('connected'),() => {
    console.log('connected to Db')
})
mongoose.connection.on(('error') ,(error)=> {
    console.log(error)
})
mongoose.connection.on(('disconnected'),() => {
    console.log('disconnected from Db')
})
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: err.status || 500,
    message: err.message,
  });
});
const PORT = process.env.PORT || 1907
app.listen(PORT, () => {
  console.log("hi");
});
