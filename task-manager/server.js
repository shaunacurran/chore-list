const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//  app.use(express.static("client/build"));
// }

app.use(routes);

// data can be used the same way from mongo or mysql
// let students = [
//   {
//     name: 'Robert'
//   },
//   {
//     name:'Alfred'
//   },
//   {
//     name: 'Morley'
//   }
// ];

// app.get('/api/students/all', function (req, res) {
//   res.json(students);
// });

mongoose.Promise = global.Promise;

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chorelist",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
