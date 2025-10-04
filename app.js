const express = require("express");

const loginRoutes = require("./routes/loginRoutes");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const app = express();

app.use(express.json());

app.use("/login", loginRoutes);

app.use(globalErrorHandler);

module.exports = app;