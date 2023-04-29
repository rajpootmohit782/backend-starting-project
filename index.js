const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());
app.use("/", (req, res, next) => {
  console.log("middware 100");
  //res.send("<h1>always runs</h1/>");
  next();
});

app.use("/add-products", (req, res, next) => {
  console.log("add-products");
  res.send(
    "<form action='/product' method='POST'><input type='text' placeHolder='title' name='title'/> <input type='text' placeHolder='size' name='size'/><button type='submit'>Add products</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body.title, req.body.size);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("middware 23");
  res.send("<h1>front-page</h1/>");
});

app.listen(4000);
