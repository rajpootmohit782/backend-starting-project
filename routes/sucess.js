const express = require("express");

const path = require("path");
const sucess = express.Router();

sucess.get("/sucess", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "sucess.html"));
});

module.exports = sucess;
