// File: ProjectTeam
// Desc: Table that relates a user to a project
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectTeamSchema = new Schema({
  _project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = ProjectTeam = mongoose.model("ProjectTeam", projectTeamSchema);
