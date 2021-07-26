const Sequelize = require("sequelize");
//Model file
var model = require("../models/models.js");
//db Configuration
db = require("../config/dbconfig.js");

let findRecords = async (req, res) => {
  return model.findAndCountAll({ offset: req.offset, limit: req.limit });
};

module.exports = { findRecords: findRecords };
