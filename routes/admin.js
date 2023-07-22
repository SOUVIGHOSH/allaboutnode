// path is another core module
const path = require("path");
const express = require("express");

const productList = [];

// router is a mini express, this is also request handler
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log(__dirname);
  res.render("addProduct", { pageTitle: "Add Product" });
});

router.post("/product", (req, res, next) => {
  productList.push(req.body);
  res.redirect("/shop");
});

exports.adminRoute = router;
exports.products = productList;
