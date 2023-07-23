const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "../", "data.json");

// helper function to fetch product from file and then if succesfull then call callback with the filecontent
const fetchProducts = (callback) => {
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

//product model
class Product {
  constructor(title, imgURL, price) {
    this.title = title;
    this.imgURL = imgURL;
    this.price = price;
    this.id = Math.random();
  }

  save() {
    fetchProducts((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log("Error occured while saving the product data");
        }
      });
    });
  }

  //static method fetchall allows fetching all products without creating an instance
  static fetchAll(callback) {
    fetchProducts(callback);
  }
}

module.exports = Product;
