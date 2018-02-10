/*jslint node: true */
/*jslint es6 */
"use strict";

var mongoose = require("mongoose");
var Image = require("../models/image");
var router = require("express").Router();
router.route("/timeline/:id?").post(addImage);

function addImage(req, res) {
    var image = new Image(_.extend({}, req.body));
    image.save(function (err) {
        if (!err) {
            res.json(image);
        } else res.send(err);
    });
}



module.exports = router;