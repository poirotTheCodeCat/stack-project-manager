/*
File: tasks.js
Description: This file contains the requests related to the creation of a new task
*/
const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");
const Task = require("../../models/Task");
const TaskTeam = require("../../models/TaskTeam");

router.post("/new", verify, async (req, res) => {
  const { user_id, project_id, name, desc, end } = req.body; // get the user id from the request
  try {
    const newTask = new Task({
      project_id: project_id,
      task_name: name,
      task_desc: desc,
      end_date: end,
    });

    // make new task
    const task = await newTask.save(); // save new task to the database

    const newTaskTeam = new TaskTeam({
      _user: user_id,
      _task: task._id,
    });

    await newTaskTeam.save(); // save the new assignment to the taskteam database

    res.status(200).send({ task: task });
  } catch {
    res.status(400).send({ msg: "Error creating new task" });
  }
});

// return tasks associated with specific user
router.get("/user", verify, async (req, res) => {
  const { user_id } = req.body; // extract user id from request

  try {
    const userTasks = await TaskTeam.find({ _user: user_id }); // find the tasks associated with a specific user
    var tasks = [];

    for (var i = 0; i < userTasks.length; i++) {
      var task = await Task.findOne({ _id: userTasks[i]._task }); // find from taskteam task id
      tasks.push(task); // add task to the array
    }

    res.status(200).send({ tasks: tasks }); // respond with tasks
  } catch {
    res.status(400).send({ msg: "Error accessing user tasks" });
  }
});

// Gets the tasks assigned to a project
router.get("/project", verify, async (req, res) => {
  const { project_id } = req.body; // extract the project id from the req

  try {
    const tasks = await Task.find({ project_id: project_id }); // find project tasks in database
    res.status(200).send({ tasks: tasks });
  } catch {
    res.status(400).send({ msg: "Failed to retrieve project tasks" });
  }
});

// assign a new user to a task
router.post("/assign", verify, async (req, res) => {
  res.status(200).send({ msg: "TODO add user to task" });
});

module.exports = router;
