const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const Event = require("../models/Event");
const Admin = require("../models/Admin");
const Category = require("../models/Category");

const models = [Event, Admin, Category];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
