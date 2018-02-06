/*jslint node: true */
/*jslint es6 */
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String
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
        type: String
    },
    longitude: {
        type: String
    }
});

let Image = mongoose.model("Image", imageSchema);

module.exports = Image;
