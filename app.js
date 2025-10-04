const express = require("express");

const loginRoutes = require("./routes/loginRoutes");

const app = express();

app.use(express.json());

app.use("/login", loginRoutes);

module.exports = app;