const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
