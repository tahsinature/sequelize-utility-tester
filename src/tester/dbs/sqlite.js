const { Sequelize } = require("sequelize");
const path = require("path");
const dbPath = path.join(__dirname, "db.sqlite");

module.exports = new Sequelize({ dialect: "sqlite", storage: dbPath });
