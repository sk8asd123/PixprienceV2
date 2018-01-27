/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const mongoDB = require("../modelsMongoDB"); // Require all Mongo Models
const db = require("../models"); // Sequelize Models

/////////////////////////////// /* Methods for New Controller */ ///////////////////////////////////////////////////
module.exports = {
  findAll: function(req, res) {
    mongoDB.New
      .find(req.query)
      .sort({ date: -1 })
      .then(mongoDBModel => res.json(mongoDbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    mongoDB.New
      .findById(req.params.id)
      .then(mongoDbModel => res.json(mongoDbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    mongoDB.New
      .create(req.body)
      .then(mongoDbModel => res.json(mongoDbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    mongoDB.New
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(mongoDbModel => res.json(mongoDbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    mongoDB.New
      .findById({ _id: req.params.id })
      .then(mongoDbModel => mongoDbModel.remove())
      .then(mongoDbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
