const express = require("express");

const router = express.Router();

router.get("/add-products", (req, res, next) => {
  console.log("add-products");
  res
    .status(301)
    .send(
      "<form action='/admin/product' method='POST'><input type='text' placeHolder='title' name='title'/> <input type='text' placeHolder='size' name='size'/><button type='submit'>Add products</button></form>"
    );
});

router.post("/product", (req, res, next) => {
  console.log(req.body.title, req.body.size);
  res.redirect("/");
});

module.exports = router;
