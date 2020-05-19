// File projects.js
// Description: This file contains the routes to perform CRUD operations on User Projects

const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");
const jwt = require("jsonwebtoken");
const Project = require("../../models/Project");

/*
Description: This get request will return the projects associated with a given user if the user exists
*/
router.get("/projects", verify, async (req, res) => {
  // extract the user required details from request
  const { _id } = req.body;

  // check for id
  if (!_id) {
    res.status(400).send({ msg: "Request error - user not specified" });
  }

  // find all projects where user_id === req_user_id
  try {
    const user_projects = await Project.find({ user_id: _id });

    // respond with the list of projects
    res.status(200).json({ projects: user_projects });
  } catch (err) {
    res.status(400).send(err);
  }
});

/*
Description: This post request will retrieve all projects for a given user if they are logged in
*/
router.post("/new", verify, async (req, res) => {
  // extract the values from request
  const { _id, project_name, start_date, end_date, description } = req.body;
  const start = new Date(start_date);
  const end = new Date(end_date);

  // validate all fields are filled out correctly - validate via @hapi/Joi

  // create new project to insert into the database
  const newProject = new Project({
    user_id: _id,
    start_date: start,
    end_date: end,
    title: project_name,
    description: description,
    isComplete: false,
  });

  // insert new project into the database
  try {
    await newProject.save().then((project) => {
      // respond with the newly created project info
      res.status(200).send({ msg: "Successfully created new Project" });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
