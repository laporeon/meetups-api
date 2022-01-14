const { Router } = require("express");

const CategoryController = require("../controllers/CategoryController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const categoriesRoutes = Router();

categoriesRoutes.get("/", CategoryController.list);
categoriesRoutes.post("/", ensureAuthenticated, CategoryController.create);
categoriesRoutes.delete("/:id", ensureAuthenticated, CategoryController.delete);

module.exports = categoriesRoutes;
