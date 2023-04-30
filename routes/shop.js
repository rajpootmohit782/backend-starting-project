const express = require("express");

const path = require("path");
const shoproute = express.Router();

shoproute.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = shoproute;
