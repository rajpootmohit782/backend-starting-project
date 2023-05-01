const express = require("express");

const sucessCotrol = require("../controllers/sucessCont");
const sucess = express.Router();

sucess.get("/sucess", sucessCotrol.sucessControl);

module.exports = sucess;
