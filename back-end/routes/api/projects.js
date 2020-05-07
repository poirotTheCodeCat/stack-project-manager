// File projects.js
// Description: This file contains the routes to perform CRUD operations on User Projects

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../../models/Project");
const { registerValidation, loginValidation } = require("../../validation");
const verify = require("../verifyToken");
