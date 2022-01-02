const { Router } = require("express");
const AdminController = require("../controllers/AdminController");

const adminRoutes = Router();

adminRoutes.post("/", AdminController.create);

module.exports = adminRoutes;
