const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middware 1");
  next();
});
app.use((req, res, next) => {
  console.log("middware 23");
  res.send("<h1>hiiii</h1/>")
});

app.listen(4000);
