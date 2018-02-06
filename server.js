/*jslint node: true */
/*jslint es6 */
"use strict";

/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const express = require('express'); // Server
const bodyParser = require ('body-parser'); // JSON Middleware
const logger = require('morgan'); // REST Logger


/////////////////////////////////////////////// /* Initialize Express */ //////////////////////////////////////////////////////////
let app = express();

/////////////////////////////////////////////// /* Express Middleware */ //////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended: true})); // Use body-parser for handling form submissions
app.use(bodyParser.json()); // Allows For JSON Interactions Between Client & Server
app.use(express.static("client/build")); // Serve Static / React Pages
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

////////////////////////////////////////////// /* Mongoose Configurations*/ //////////////////////////////////////////////////////////
const mongoose = require('mongoose'); // MongoDB ORM
mongoose.Promise = global.Promise; // Set up promises with mongoose
const mongooseConnection = mongoose.connection;
const db = require("./models"); // Sequelize Models


mongoose.connect( // Connect to the Mongo DB
  process.env.MONGODB_URI || "mongodb://localhost/react_passport",
  {
    useMongoClient: true
  }
);

mongooseConnection.on("error", console.error.bind(console, "connection error:"));

mongooseConnection.once("open", function() {
  console.log("Sucessfully Connected to Mongo DB !"); // If Connection is successful, Console.log(Message)
});


/////////////////////////////////////////////// /* Routes */ //////////////////////////////////////////////////////////
const routes = require("./routes");
app.use(routes); // Add routes, both API and View

/////////////////////////////////////////////// /* Passport */ //////////////////////////////////////////////////////////

// Passport Validation //
const passport = require('passport');

// load passport strategies //
const localSignupStrategy = require('./passport/localSignup');
const localLoginStrategy = require('./passport/localLogin');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


/////////////////////////////////////////////// /* Start Server */ //////////////////////////////////////////////////////////
let PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (!error) {
        console.log("listening on port", PORT);
    } else {
        console.error(error)
        throw error;
    }
});
