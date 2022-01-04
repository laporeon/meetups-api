require("./database");

const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/event.routes");
const adminRoutes = require("./routes/admin.routes");
const tokenRoutes = require("./routes/token.routes");

const app = express();

const port = process.env.PORT || 4001;

app.use(cors());

app.use(express.json());

app.use("/event", eventRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", tokenRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  console.log(`http://localhost:${port}`);
});
