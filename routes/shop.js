const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router.get("/shop", productController.showProducts);

router.get("/cart", productController.showCart);

module.exports = router;
