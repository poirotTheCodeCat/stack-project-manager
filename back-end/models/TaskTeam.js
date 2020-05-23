// File: TaskTeam
// Desc: Table that relates a user to a task
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskTeamSchema = new Schema({
  _task: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = TaskTeam = mongoose.model("TaskTeam", taskTeamSchema);
