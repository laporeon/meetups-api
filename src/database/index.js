const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const Event = require("../models/Event");
const Admin = require("../models/Admin");

// Vamos criar um array com todos os models que utilizaremos
const models = [Event, Admin];

// Vamos criar a conexão
const connection = new Sequelize(databaseConfig);

// Agora vamos inicializar os models
models.forEach((model) => model.init(connection));
