const express = require("express");
const productController = require("../controller/product");

// router is a mini express, this is also request handler
const router = express.Router();

router.get("/add-product", productController.getAddProduct);

router.post("/product", productController.postProduct);

module.exports = router;
