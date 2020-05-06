const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../../models/User");

// route - GET /api/users
// description - Retrieves user information
// access TBD
router.get("/", (req, res) => {
  res.json({
    firstName: "Sherlock",
    lastName: "Holmes",
    email: "pipedetective@mystery.com",
  });
});

// route - POST /api/users
// description - Store a new user in the database
// access - Public
router.post("/", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Credentials are missing" });
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    // Salt and hash the password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(400).json({ msg: "Error creating user" }); // check for error creating salt
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return res.status(400).json({ msg: "Error creating user" }); // check for error in generating hash
        newUser.password = hash;
        newUser.save().then((user) => {
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
  });
});

module.exports = router;
