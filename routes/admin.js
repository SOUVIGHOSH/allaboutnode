// path is another core module
const path = require("path");
const express = require("express");

// router is a mini express, this is also request handler
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../", "views", "addProduct.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
