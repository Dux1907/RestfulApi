const mongoose = require("mongoose");
const newError = require("http-errors");

const Product = require("../Models/Model");

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const product = await Product.find({}, { __v: 0 });
      res.send(product);
    } catch (error) {
      console.log(error);
    }
  },
  PostProduct: async (req, res, next) => {
    try {
      const product = new Product(req.body);
      const result = await product.save();
      res.send(result);
    } catch (error) {
      if (error.name === "ValidationError") {
        next(newError(error.message));
      }
      next(error);
    }
  },
  GetById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw newError(404, "Product Not Found!");
      }
      res.send(product);
    } catch (error) {
      if (error instanceof mongoose.CastError) {
        next(newError(404, "Invalid Product Id"));
        return;
      }
      next(error);
    }
  },
  PatchById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const options = { new: true };
      const result = await Product.findByIdAndUpdate(id, body, options);
      if (!result) {
        throw newError(404, "Product Not Found!");
      }
      res.send(result);
    } catch (error) {
      if (error instanceof mongoose.CastError) {
        next(newError(404, "Wrong id!"));
      }
      next(error);
    }
  },
  DeleteById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Product.findByIdAndDelete({ _id: id });
      if (!product) {
        throw newError(404, "Product Not found!");
      }
      res.send(product);
    } catch (error) {
      if (error instanceof mongoose.CastError) {
        next(newError(404, "Wrong Id"));
      }
      next(error);
    }
  },
};
