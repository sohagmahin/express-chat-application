const { check, validationResult } = require("express-validator");

const doLoginValidator = [
  check("username")
    .isLength({
      min: 1,
    })
    .withMessage("Mobile number or email is required"),

  check("password").isLength({ min: 1 }).withMessage("passowrd is required!"),
];

const doLoginValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: mappedErrors,
    });
  }
};

module.exports = {
  doLoginValidator,
  doLoginValidationHandler,
};
