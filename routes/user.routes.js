const express = require("express");
const { body, validationResult } = require("express-validator");
const { runValidation } = require("../validation/user.validation");
const { registerUser, loginUser } = require("../controllers/user.controllers");
const { userRegistrationValidator, userLoginValidator } = require("../validation/auth");

const userRoutes = express.Router();

userRoutes.post( "/register", userRegistrationValidator, runValidation, registerUser );
userRoutes.post("/login", userLoginValidator, runValidation, loginUser);

module.exports = userRoutes;