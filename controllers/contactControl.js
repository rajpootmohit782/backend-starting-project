const path = require("path");
exports.getContactform = (req, res, next) => {
  console.log("constact");
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};

exports.postContactForm = (req, res, next) => {
  console.log(req.body.name, req.body.email, req.body.message);
  res.redirect("/sucess");
};
