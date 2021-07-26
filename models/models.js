var Sequelize = require("sequelize");
db = require("../config/dbconfig.js");

const nicer_but_slower_film_list = db.define(
  "nicer_but_slower_film_list",
  {
    FID: {
      type: Sequelize.SMALLINT,
      //To ensure that Sequelize does not use id by default
      primaryKey: true,
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    category: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    length: Sequelize.SMALLINT,
    rating: Sequelize.ENUM("G", "PG", "PG-13", "R", "NC-17"),
    actors: Sequelize.STRING,
  },
  {
    //This is to ensure that Sequelize does not pluralize table names
    freezeTableName: true,
    //This is to ensure that Sequlize does not add its own timestamp variables in the query.
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = nicer_but_slower_film_list;
