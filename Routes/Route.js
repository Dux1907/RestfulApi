const express = require("express");
const router = express.Router();
const Controller = require("../Controller/Controller");
router.get("/", Controller.getAllProducts);
router.post("/", Controller.PostProduct);

router.get("/:id", Controller.GetById);
router.patch("/:id", Controller.PatchById);
router.delete("/:id", Controller.DeleteById);

module.exports = router;
