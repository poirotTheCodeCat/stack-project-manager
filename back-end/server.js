const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // retrieves all environment variables to use

const server = express();
const port = process.env.PORT || 5000; // initialize the port that the server will run on

server.listen(port, () => console.log("Server is running on port " + port));
