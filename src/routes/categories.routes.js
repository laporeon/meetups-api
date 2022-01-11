const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");

const categoriesRoutes = Router();

categoriesRoutes.get("/", CategoryController.list);
categoriesRoutes.post("/", CategoryController.create);

module.exports = categoriesRoutes;
