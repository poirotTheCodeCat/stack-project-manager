const express = require("express");
const router = express.Router();

// route - GET api/users
// description - Retrieves user information
// access TBD
router.get("/", (req, res) => {
  res.json({
    firstName: "Sherlock",
    lastName: "Holmes",
    email: "pipedetective@mystery.com",
  });
});

module.exports = router;
