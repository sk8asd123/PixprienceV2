/*jslint node: true */
/*jslint es6 */
"use strict";

/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const express = require('express'); // Server
const bodyParser = require ('body-parser'); // JSON Middleware
const logger = require('morgan'); // REST Logger
const mongoose = require('mongoose'); // MongoDB ORM

// Passport Validation Packages //
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


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
app.use(cookieParser());


app.use(session({ // Express Session
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars for Flash Messages
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg'); // Global Varibles
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

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
