const { body } = require("express-validator");

exports.createBookingValidation = [
  body("packageId").isUUID().notEmpty().withMessage("Package ID is required"),
  body("clientName")
    .isString()
    .notEmpty()
    .withMessage("Client name is required"),
  body("clientEmail").isEmail().withMessage("Please provide a valid email"),
  body("clientPhone")
    .isNumeric()
    .notEmpty()
    .withMessage("Client phone number is required"),
  // body("eventDate").isDate().withMessage("Please provide a valid date"),
  body("eventDescription")
    .isString()
    .withMessage("Please provide a valid description"),
  // body("eventTime").isTime().withMessage("Please provide a valid time"),
];

exports.getIdValidation = [
  body("id").isUUID().notEmpty().withMessage("Please provide an ID"),
];

exports.updateBookingValidation = [
  body("id").isUUID().notEmpty().withMessage("Please provide a valid ID"),

  body("packageId")
    .optional() // Makes the field optional
    .isUUID()
    .withMessage("Please provide a valid Package ID"),

  body("clientName")
    .optional()
    .isString()
    .withMessage("Please provide a valid Client Name"),

  body("clientEmail")
    .optional()
    .isEmail()
    .withMessage("Please provide a valid email address"),

  body("clientPhone")
    .optional()
    .isNumeric()
    .withMessage("Please provide a valid phone number"),

  body("eventDescription")
    .optional()
    .isString()
    .withMessage("Please provide a valid description"),

  body("eventDate")
    .optional()
    .isDate()
    .withMessage("Please provide a valid date"),

  body("eventTime")
    .optional()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Please provide a valid time"),
];

exports.createPackageValidation = [
  body("name").isString().notEmpty().withMessage("Please provide a name"),
  body("description")
    .isString()
    .notEmpty()
    .withMessage("Please provide a description"),
  body("price")
    .isDecimal({ decimal_digits: "2", locale: "en-US" })
    .notEmpty()
    .withMessage("Please provide a price"),
];

exports.updatePackageValidation = [
  body("id").isUUID().notEmpty().withMessage("Please provide an ID"),
  body("name")
    .isString()
    .notEmpty()
    .optional()
    .withMessage("Please provide a name"),
  body("description")
    .isString()
    .optional()
    .notEmpty()
    .withMessage("Please provide a description"),
  body("price")
    .isDecimal()
    .optional()
    .notEmpty()
    .withMessage("Please provide a price"),
];
