const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true}
});

const Household = mongoose.model("Household", householdSchema);

module.exports = Household;