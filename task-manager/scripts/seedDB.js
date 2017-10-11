const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/chorelist",
    {
       useMongoClient: true 
    }
);

const userSeed = [
    {
        email: "test@gmail.com",
        householdID: "2"
    },
    {
        email: "test1@gmail.com",
        householdID: "2"
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });