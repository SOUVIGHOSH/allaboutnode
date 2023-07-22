//wiring product model
const Product = require("../model/product");

//controller method for showing add product ui
exports.getAddProduct = (req, res, next) => {
  res.render("addProduct", { pageTitle: "Add Product", path: req.url });
};

//constroller method for saving a product
exports.postProduct = (req, res, next) => {
  let { title, imgurl, price } = req.body;
  let product = new Product(title, imgurl, price);
  product.save();
  res.redirect("/shop");
};

//controller methos for showign all products ui
exports.showProducts = (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "allProducts"));
  Product.fetchAll((products) => {
    res.render("allProducts", {
      pageTitle: "My Shop",
      products,
      path: req.url,
    });
  });
};

exports.showCart = (req, res, next) => {
  res.render("cart", {
    path: req.url,
    pageTitle: "Cart  ",
  });
};

exports.showAdmin = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin", {
      pageTitle: "Admin Panel",
      products,
      path: req.url,
    });
  });
};
