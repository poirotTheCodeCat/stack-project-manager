/*
File: tasks.js
Description: This file contains the requests related to the creation of a new task
*/
const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");
const Task = require("../../models/Task");
const TaskTeam = require("../../models/TaskTeam");

router.post("/new", verify, (req, res) => {
  // get information from request
  // create new Task to load into database
  // verify info in req
  // save the new task into database
  res.status(200).send({ msg: "Successfully added new task" });
});

router.get("/all", verify, (req, res) => {
  // return tasks associated with specific user - use TaskTeam DB - search for user_id
});

module.exports = router;
