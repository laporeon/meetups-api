require("./database");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerFile = require("../swagger.json");

const eventRoutes = require("./routes/event.routes");
const adminRoutes = require("./routes/admin.routes");
const tokenRoutes = require("./routes/token.routes");
const categoriesRoutes = require("./routes/categories.routes");

const app = express();

const port = process.env.PORT || 4001;

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/event", eventRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", tokenRoutes);
app.use("/categories", categoriesRoutes);

module.exports = { app, port };
