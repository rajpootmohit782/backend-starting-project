const express = require("express");
const productsController = require("../controllers/products");

const shoproute = express.Router();

shoproute.get("/", productsController.getproducts);

module.exports = shoproute;
