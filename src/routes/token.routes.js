const { Router } = require("express");
const TokenController = require("../controllers/TokenController");

const tokenRoutes = Router();

tokenRoutes.post("/", TokenController.store);

module.exports = tokenRoutes;
