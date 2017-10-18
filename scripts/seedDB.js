const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/chorelist",
    {
       useMongoClient: true 
    }
);

const householdSeed = [
    {
        housename: "household1",
        housepassword: "thisIsATest",
        email: 'test@gmail.com'
    },
    {
        housename: "household2",
        housepassword: "thisIsATest2",
        email: 'test@hotmail.com'

    }
];

const userSeed = [
    {
        email: "test@gmail.com",
        householdID: "2",
        password: 'test'
    },
    {
        email: "test1@gmail.com",
        householdID: "2",
        password: 'test1'
    }
];

const taskSeed = [
    {
        taskName: "Buy Milk",
        taskTime: "Today",
        taskDate: new Date(),
        taskLocation: "Grocery Store"
    }
];

db.Household
    .remove({})
    .then(() => db.Household.collection.insertMany(householdSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

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

db.Task
    .remove({})
    .then(() => db.Task.collection.insertMany(taskSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
