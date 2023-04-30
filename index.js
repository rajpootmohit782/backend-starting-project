const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/admin");
const shoproute = require("./routes/shop");
const contactme = require("./routes/contactus");
const sucesspage = require("./routes/sucess");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(shoproute);

app.use(contactme);

app.use(sucesspage);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404error.html"));
});
app.listen(4000);
