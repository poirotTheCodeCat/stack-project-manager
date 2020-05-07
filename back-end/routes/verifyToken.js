// File: verifyToekn.js
// Description: This file contains the middleware function that is used to verify a JSON Web token when a user is attempting to access information
//      from the website

const jwt = require("jsonwebtoken");

// middleware function used to verify json web tokens submitted to the server
function auth(req, res, next) {
  const token = req.header("auth-token"); // extract the jwt web token from request header
  if (!token) return res.status(401).send("Access Denied"); // make sure a token was submitted

  try {
    const verified = jwt.verify(token, process.env.JWT_TOKEN); // verify the submitted token
    req.user = verified;
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}
