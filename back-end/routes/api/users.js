const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../../models/User");
const { registerValidation, loginValidation } = require("../../validation");

// route - GET /api/users
// description - Retrieves user information
// access TBD
router.get("/login", async (req, res) => {
  // load recieved credentials into local variables
  const { email, password } = req.body;

  // check that credentials were recieved
  if (!email || !password) {
    return res.json({ msg: "Login redentials missing" });
  }
  // check if the User email exists in the database
  await User.findOne({ email }).then((user) => {
    if (!user) {
      return res.json({ msg: "No user exists with this email" });
    }
    try {
      // check the user password
      bcrypt.compare(password, user.password, (err, check) => {
        if (err) {
          throw err;
        }
        // check if the password is correct
        if (!check) {
          return res
            .status(400)
            .json({ msg: "Incorrect Username or password" });
        }
        // send back user credentials
        res.status(200).json({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        });
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });
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
    return res.status(400).json({ msg: "User already exists" });
  }

  // create new user
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
  });

  try {
    // Salt and hash the password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(() => {
          res.json({
            user: {
              firstName: firstName,
              lastName: lastName,
              email: email,
            },
          });
        });
      });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
