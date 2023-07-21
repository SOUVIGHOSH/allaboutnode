const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/shop", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "allProducts.html"));
});

module.exports = router;
