const path = require("path");
exports.sucessControl = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "sucess.html"));
};
