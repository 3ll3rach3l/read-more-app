const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { User } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { requireUser, generateToken, AuthenticationError } = require("../util/auth");
const { jwtConfig: { expiresIn } } = require('../../config');


