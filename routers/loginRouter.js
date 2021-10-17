// external imports
const express = require("express");

// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getLogin, login, logout } = require("../controller/loginController");
const {
  doLoginValidator,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");
const { redirectLoggedIn } = require("../middlewares/common/checkLogin");
const router = express.Router();

const page_name = "Login";

// login page
router.get("/", decorateHtmlResponse(page_name), redirectLoggedIn, getLogin);

// login
router.post(
  "/",
  decorateHtmlResponse(page_name),
  doLoginValidator,
  doLoginValidationHandler,
  login
);

// logout
router.delete("/", logout);

module.exports = router;
