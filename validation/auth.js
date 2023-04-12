const { check } = require("express-validator");

exports.userRegistrationValidator = [
    check("name").trim().notEmpty().withMessage("name is missing")
    .isLength({min: 5}).withMessage("name must have at least 5 character")
    .isLength({max: 31}).withMessage("name can must have maximum 31 character"),

    check("email").trim().notEmpty().withMessage("Email is missing")
    .isEmail().withMessage("not a valid email"),

    check("password").trim().notEmpty().withMessage("password is missing")
    .isLength({min: 6}).withMessage("Password must hava at least 6 character"),

    check("dob").trim().notEmpty().withMessage("dob is missing")
    .isISO8601().toDate().withMessage("not is a valid dob"),
];

exports.userLoginValidator = [
    // input validation
    check("email").trim().notEmpty().withMessage("Email is missing")
    .isEmail().withMessage("not a valid email"),

    check("password").trim().notEmpty().withMessage("password is missing")
    .isLength({min: 6}).withMessage("Password must hava at least 6 character"),
];