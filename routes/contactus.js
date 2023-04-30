const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  console.log("constact");
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/contactme", (req, res, next) => {
  console.log(req.body.name, req.body.email, req.body.message);
  res.redirect("/sucess");
});

module.exports = router;
