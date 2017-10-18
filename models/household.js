const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdSchema = new Schema({
    housename: {type: String, required: true},
    housepassword: {type: String, required: true},
    email: {type: String, required: true}
});

const Household = mongoose.model("Household", householdSchema);

module.exports = Household;