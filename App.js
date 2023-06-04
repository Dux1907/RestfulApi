const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://abc:abc12@cluster0.hhk9kze.mongodb.net/RestfulApi"
  )
  .then(() => {
    console.log("connected");
  });
const Route = require("./Routes/Route");
app.use("/products", Route);

app.use((req, res, next) => {
  next(new Error("Cannot find anything!"));
});


app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: err.status || 500,
    message: err.message,
  });
});
app.listen(1907, () => {
  console.log("hi");
});
