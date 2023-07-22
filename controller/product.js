//wiring product model
const Product = require("../model/product");

//controller method for showing add product ui
exports.getAddProduct = (req, res, next) => {
  res.render("addProduct", { pageTitle: "Add Product" });
};

//constroller method for saving a product
exports.postProduct = (req, res, next) => {
  let product = new Product(req.body.title);
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
    });
  });
};
