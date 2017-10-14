const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    createdDate: {type: String, required: true},
    createdBy: {type: String, required: true},
    taskName:{type: String, requied: true},
    taskDate: {},
    taskTime: {},
    taskLocation: {}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;