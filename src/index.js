const { Sequelize } = require("sequelize");
const db = require("./tester/dbs/sqlite");
const { SequelizeHelper } = require("./lib/sequelize-utility");

const dbHelper = new SequelizeHelper([db], Sequelize, { logger: console.log });

// dbHelper.establishConnections();
// dbHelper.syncAllForce();
