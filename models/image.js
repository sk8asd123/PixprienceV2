/*jslint node: true */
/*jslint es6 */
"use strict";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: {
        type: "String",
        required: true
    },
    notes: {
        type: "String"
    },
    image: {
        data: Buffer,
        contentType: String
    },
    dateAdded: {
        type: "Date",
        default: Date.now,
        required: true
    }
});

export default mongoose.model("Image", imageSchema);
