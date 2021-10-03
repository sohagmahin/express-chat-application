// external imports
const express = require("express");

// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getInbox } = require("../controller/inboxController");

const router = express.Router();

// inbox page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
