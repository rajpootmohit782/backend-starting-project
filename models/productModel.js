const path = require("path");
const fs = require("fs");

const productFromFile = (cb) => {
  const p = path.join(__dirname, "../", "data", "products.json");
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(filecontent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // productsArray.push(this);
    const p = path.join(__dirname, "../", "data", "products.json");

    fs.readFile(p, (err, filecontent) => {
      let productsArray = [];
      if (!err) {
        productsArray = JSON.parse(filecontent);
      }
      productsArray.push(this);
      fs.writeFile(p, JSON.stringify(productsArray), (err) => {
        console.log(err);
      });
    });
  }

  static FetchAll(cb) {
    productFromFile(cb);
  }
};
