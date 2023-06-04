const express = require("express");
const router = express.Router();
const Product = require("../Models/Model");
router.get("/", async (req, res, next) => {
  try {
    const product = await Product.find({}, { __v: 0 });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const options = { new: true };
    const result = await Product.findByIdAndUpdate(id, body, options);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.deleteOne({ _id: id });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
