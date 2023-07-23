//wiring product model
const Product = require("../model/product");

//controller method for showing add product ui
exports.getAddProduct = (req, res, next) => {
  res.render("addProduct", {
    pageTitle: "Add Product",
    path: req.url,
    isEdit: false,
  });
};
//controller method for showing edit product ui
exports.getEditProduct = (req, res, next) => {
  console.log("getEdit called");
  let prodId = req.params.productId;
  Product.fetchProductById(prodId, (product) => {
    res.render("addProduct", {
      pageTitle: "Edit Product",
      path: "/add-product",
      isEdit: true,
      product,
    });
  });
};

//constroller method for saving a product
exports.postProduct = (req, res, next) => {
  let { title, imgURL, price } = req.body;
  let product = new Product(title, imgURL, price);
  product.save().then(() => res.redirect("/shop"));
};

exports.updateProduct = (req, res, next) => {
  let id = +req.params.productId;
  let payload = { ...req.body, id };
  Product.update(id, payload);
  res.redirect("/shop");
};

exports.deleteProduct = (req, res, next) => {
  let id = +req.params.productId;
  Product.delete(id);
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
