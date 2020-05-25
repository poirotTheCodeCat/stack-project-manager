// File projects.js
// Description: This file contains the routes to perform CRUD operations on User Projects

const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");
const jwt = require("jsonwebtoken");
const Project = require("../../models/Project");
const ProjectTeam = require("../../models/ProjectTeam");

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
    // find all Projects using ProjectTeam database
    const user_projects = await ProjectTeam.find({ _user: _id });
    var projects = [];

    for (var i = 0; i < user_projects.length; i++) {
      var proj = await Project.findOne({
        _id: user_projects[i]._project,
      }); // use the project id to find the project details

      if (proj) {
        projects.push(proj); // add the proj to the array
      }
    }

    // respond with the list of projects
    res.status(200).json({ projects: projects });
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

  // validate all fields are filled out correctly - validate via @hapi/Joi TODO

  // create new project to insert into the database
  const newProject = new Project({
    owner: _id,
    start_date: start,
    end_date: end,
    title: project_name,
    description: description,
    isComplete: false,
  });

  // insert new project into the database
  try {
    const project = await newProject.save(); // save the new project

    // create initial team member to add to the DB
    const creator = new ProjectTeam({
      _user: _id,
      _project: project._id,
    });

    await creator.save(); // save the new team member

    res.status(200).send({ newProject: project }); // send response
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/project", verify, (req, res) => {
  // get the project ID from the req
  // remove all tasks associated with project ID
  // remove the project
});

module.exports = router;
