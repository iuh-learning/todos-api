const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
  },
  priority: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('todos', todoSchema);