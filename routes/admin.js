const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path");

router.get("/add-products", (req, res, next) => {
  console.log("add-products");
  res.sendFile(path.join(__dirname, "../", "views", "add-products.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = router;
