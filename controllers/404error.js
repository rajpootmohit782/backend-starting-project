const path = require("path");
exports.errorControler = (req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "../", "views", "404error.html"));
};
