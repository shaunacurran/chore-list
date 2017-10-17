const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    createdBy: {type: String, required: true},
    taskName:{type: String, requied: true},
    taskStatus:{type: String, required: true},
    taskType: {type: String, requied:true},
    taskDate: {type: Date, required: true},
    taskTime: {type: Time, required: true},
    taskLocation: {type: String, required}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;