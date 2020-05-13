// File users.js
// Description: This file contains the routes used to register a new account and login to an existing account

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../../models/User");
const { registerValidation, loginValidation } = require("../../validation");

// route - GET /api/users
// description - Retrieves user information
// access TBD
router.post("/login", async (req, res) => {
  // load recieved credentials into local variables
  const { email, password } = req.body;

  // check that credentials were recieved
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("Incorrect Username or password");
  }

  try {
    // check the user password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.status(400).send("Incorrect Username or password");

    // create and assign json web token
    const token = jwt.sign({ _id: user.id }, process.env.JWT_TOKEN);

    // send back response
    res.status(200).json({
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// route - POST /api/users
// description - Store a new user in the database
// access - Public
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body); // validate user details
  if (error) return res.status(400).send(error.details[0].message);

  const { firstName, lastName, email, password } = req.body; // load the contents of the request body

  // Check for existing user
  const checkExist = await User.findOne({ email });
  if (checkExist) {
    return res.status(400).send("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  // create new user
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPass,
  });

  await newUser
    .save()
    .then((user) => {
      // create and assign json web token
      const token = jwt.sign({ _id: user.id }, process.env.JWT_TOKEN);

      res.status(200).json({
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
