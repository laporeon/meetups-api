const { Router } = require("express");

const EventController = require("../controllers/EventController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const eventRoutes = Router();

eventRoutes.get("/", EventController.list);
eventRoutes.post("/", ensureAuthenticated, EventController.create);
eventRoutes.delete("/:id", ensureAuthenticated, EventController.delete);

module.exports = eventRoutes;
