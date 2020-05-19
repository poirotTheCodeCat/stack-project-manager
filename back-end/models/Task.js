const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  project_id: {
    type: String,
    required: true,
  },
  task_name: {
    type: String,
    required: true,
  },
  task_desc: {
    type: String,
    required: false,
  },
  end_date: {
    type: Date,
  },
});

module.exports = Task = mongoose.model("Task", TaskSchema);
