const path = require("path");
const prod = require("../models/productModel");
const fs = require("fs");
exports.getAddProduct = (req, res, next) => {
  console.log("add-products");
  res.sendFile(path.join(__dirname, "../", "views", "add-products.html"));
};

exports.postAddProduct = (req, res, next) => {
  const product = new prod(req.body.title);
  product.save();
  res.redirect("/");
};

// exports.getproducts = (req, res, next) => {
//     const products = prod.FetchAll()
//   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
// };
exports.getproducts = (req, res, next) => {
  prod.FetchAll((products) => {
    console.log(products);
    fs.readFile(
      path.join(__dirname, "../", "views", "shop.html"),
      "utf8",
      (err, htmlTemplate) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Internal Server Error");
        }

        let productListHTML = "";

        products.forEach((product) => {
          productListHTML += `<li>${product.title}</li>`;
        });

        const modifiedHTML = htmlTemplate.replace(
          "{{PRODUCT_LIST}}",
          productListHTML
        );

        res.send(modifiedHTML);
      }
    );
  });
};
