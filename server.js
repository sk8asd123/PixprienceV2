/*jslint node: true */
/*jslint es6 */
"use strict";

/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const express = require('express'); // Server
const bodyParser = require ('body-parser'); // JSON Middleware
const logger = require('morgan'); // REST Logger
const mongoose = require('mongoose'); // MongoDB ORM


/////////////////////////////////////////////// /* Variables */ //////////////////////////////////////////////////////////
let PORT = process.env.PORT || 8080;
const User = require("./models/user.js");
const routes = require("./routes");
let mongooseConnection = mongoose.connection;
let db = require("./models"); // Sequelize Models

/////////////////////////////////////////////// /* Initialize Express */ //////////////////////////////////////////////////////////
let app = express();

/////////////////////////////////////////////// /* Routes */ //////////////////////////////////////////////////////////
app.use(routes); // Add routes, both API and View

/////////////////////////////////////////////// /* Express Middleware */ //////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended: true})); // Use body-parser for handling form submissions
app.use(bodyParser.json()); // Allows For JSON Interactions Between Client & Server
app.use(express.static("client/build")); // Serve Static / React Pages
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

/////////////////////////////////////////////// /* Mongoose Configurations*/ //////////////////////////////////////////////////////////
mongoose.Promise = global.Promise; // Set up promises with mongoose

mongoose.connect( // Connect to the Mongo DB
  process.env.MONGODB_URI || "yourDatabaseLinkGoesHere",
  {
    useMongoClient: true
  }
);

mongooseConnection.on("error", console.error.bind(console, "connection error:"));

mongooseConnection.once("open", function() {
  console.log("Sucessfully Connected to Mongo DB !"); // If Connection is successful, Console.log(Message)
});


/////////////////////////////////////////////// /* Start Server */ //////////////////////////////////////////////////////////
app.listen(PORT, (error) => {
    if (!error) {
        console.log("listening on port", PORT);
    } else {
        console.error(error)
        throw error;
    }
});