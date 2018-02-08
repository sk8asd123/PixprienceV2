/*jslint node: true */
/*jslint es6 */
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        required: true
    },
    latitude: {
        type: String,
        trim: true
    },
    longitude: {
        type: String,
        trim: true
    }
});

let Image = mongoose.model("Image", imageSchema);

module.exports = Image;
