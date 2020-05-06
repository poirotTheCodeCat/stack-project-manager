const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the User Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: String,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("User", userSchema); // export the user model
