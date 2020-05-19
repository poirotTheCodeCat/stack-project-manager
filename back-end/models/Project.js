const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },

  start_date: {
    type: Date,
    default: Date.now(),
  },

  end_date: {
    type: Date,
    required: true,
  },
});

module.exports = Project = mongoose.model("Project", projectSchema);
