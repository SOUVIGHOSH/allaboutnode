const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "../", "data.json");

// helper function to fetch product from file and then if succesfull then call callback with the filecontent
const fetchProducts = async (callback) => {
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      callback([]);
    } else {
      try {
        callback(JSON.parse(fileContent));
      } catch (e) {
        console.log(e);
      }
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

  async save() {
    await fetchProducts(async (products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log("Error occured while saving the product data");
        }
      });
    });
  }

  static async update(id, payload) {
    await fetchProducts(async (products) => {
      let index = products.findIndex((p) => p.id === +id);
      products[index] = payload;
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log("Error occured while saving the product data");
        }
      });
    });
  }

  static async delete(id) {
    await fetchProducts(async (products) => {
      products = products.filter((p) => p.id !== +id);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log("Error occured while saving the product data");
        } else {
          console.log("record deleted");
        }
      });
    });
  }

  //static method fetchall allows fetching all products without creating an instance
  static fetchAll(callback) {
    fetchProducts(callback);
  }

  static fetchProductById(id, callback) {
    fetchProducts((products) => {
      let index = products.findIndex((p) => p.id === +id);
      callback(products[index]);
    });
  }
}

module.exports = Product;
