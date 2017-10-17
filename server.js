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
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
}

app.use(routes);

mongoose.Promise = global.Promise;

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect("mongodb://heroku_nmzm366r:3ea5cp35qq2ou5j9bvu28bpl1e@ds023530.mlab.com:23530/heroku_nmzm366r");
//   process.env.MONGODB_URI || "mongodb://localhost/chorelist",
//   {
//     useMongoClient: true
//   }
// );

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
