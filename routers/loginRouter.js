// external imports
const express = require("express");

// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getLogin, login } = require("../controller/loginController");
const {
  doLoginValidator,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");

const router = express.Router();

const page_name = "Login";

// login page
router.get("/", decorateHtmlResponse(page_name), getLogin);

// login
router.post(
  "/",
  decorateHtmlResponse(page_name),
  doLoginValidator,
  doLoginValidationHandler,
  login
);

module.exports = router;
