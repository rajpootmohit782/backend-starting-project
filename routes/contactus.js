const express = require("express");
const path = require("path");
const contactContol = require("../controllers/contactControl");
const router = express.Router();

router.get("/contact", contactContol.getContactform);

router.post("/contactme", contactContol.postContactForm);

module.exports = router;
