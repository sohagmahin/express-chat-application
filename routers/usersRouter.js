// external imports
const express = require("express");

// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getUsers } = require("../controller/usersController");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
