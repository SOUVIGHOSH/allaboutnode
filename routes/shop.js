const express = require("express");
const path = require("path");
const adminRouter = require("./admin");

const router = express.Router();

router.get("/shop", (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "allProducts"));
  res.render("allProducts", {
    pageTitle: "My Shop",
    products: adminRouter.products,
  });
});

module.exports = router;
