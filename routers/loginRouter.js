// external imports
const express = require("express");

// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getLogin } = require("../controller/loginController");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
