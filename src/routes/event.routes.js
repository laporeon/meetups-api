const { Router } = require("express");

const EventController = require("../controllers/EventController");

const eventRoutes = Router();

eventRoutes.post("/", EventController.create);

module.exports = eventRoutes;
