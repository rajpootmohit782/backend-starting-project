const express = require("express");

const shoproute = express.Router();

shoproute.get("/", (req, res, next) => {
  res.status(303).send("<h1>front-page</h1/>");
});

module.exports = shoproute;
