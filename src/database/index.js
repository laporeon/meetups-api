const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const Event = require("../models/Event");
const Admin = require("../models/Admin");

const models = [Event, Admin];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
