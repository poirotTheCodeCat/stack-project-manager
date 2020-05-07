const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config(); // retrieves all environment variables to use

const server = express();
const port = process.env.PORT || 5000; // initialize the port that the server will run on

server.use(bodyParser.json()); // set up bodyparser middleware to parse incoming strings for json data

// set up database
const db = process.env.MONGO_URI;

// connect to mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log(err));

// initialize routes
const users = require("./routes/api/users");
server.use("/api/users", users); // set the users api route on the server

server.listen(port, () => console.log("Server is running on port " + port)); // start listening on port
