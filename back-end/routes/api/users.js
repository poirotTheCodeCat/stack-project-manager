const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../../models/User");

// route - GET /api/users
// description - Retrieves user information
// access TBD
router.get("/", (req, res) => {
  // load recieved credentials into local variables
  const { email, password } = req.body;

  // check that credentials were recieved
  if (!email || !password) {
    return res.json({ msg: "Login redentials missing" });
  }
  // check if the User email exists in the database
  User.findOne({ email }).then((user) => {
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

    try {
      // Salt and hash the password
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.json({
                user: {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                },
              });
            })
            .catch(() => res.status(400).send(err));
        });
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });
});

module.exports = router;
