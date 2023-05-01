const path = require("path");
const aRRyProduct = [];
exports.getAddProduct = (req, res, next) => {
  console.log("add-products");
  res.sendFile(path.join(__dirname, "../", "views", "add-products.html"));
};

exports.postAddProduct = (req, res, next) => {
  aRRyProduct.push(req.body.title);
  console.log(aRRyProduct);
  res.redirect("/");
};

exports.getproducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
