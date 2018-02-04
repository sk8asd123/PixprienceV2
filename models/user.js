/*jslint node: true */
/*jslint es6 */
"use strict";


const mongoose = require("mongoose");
Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    gender: {
        type: String
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    },
    profilePicture: {
        type: Buffer
    },
    // populate the user with his/her images
    note: {
        type: Schema.Types.ObjectId,
        ref: "Image"
    }
    


});
// create User model
let User = mongoose.model("User", userSchema);

// exports the User schema
module.exports = User