const { Router } = require("express");

const EventController = require("../controllers/EventController");

const eventRoutes = Router();

eventRoutes.get("/", EventController.list);
eventRoutes.post("/", EventController.create);
eventRoutes.delete("/:id", EventController.delete);

module.exports = eventRoutes;
