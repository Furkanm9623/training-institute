const express = require("express");
const { submitContactForm } = require("../controllers/contactController");

const router = express.Router();

router.post("/contact-us", submitContactForm);

module.exports = router;
