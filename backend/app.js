const express = require("express");
const routes = require("./routes");
const userRouter = require("./routes/userRoutes")


const app = express();

app.use(express.json());
app.use("/", routes);
app.use("/api/user", userRouter)

module.exports = app;
