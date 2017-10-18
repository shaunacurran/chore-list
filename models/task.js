const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    createdBy: {type: String},
    taskName:{type: String, requied: true},
    taskStatus:{type: String},
    taskType: {type: String},
    taskDate: {type: Date, default: Date.now},
    taskTime: {type: String},
    taskLocation: {type: String, required: true}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;