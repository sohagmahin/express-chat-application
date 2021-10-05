// external imports
const express = require("express");

// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getUsers } = require("../controller/usersController");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidators } = require("../middlewares/users/userValidators");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post("/", avatarUpload, addUserValidators);

module.exports = router;
