const express = require("express");

const loginRoutes = require("./routes/loginRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const postsRoutes = require("./routes/postsRoutes");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const app = express();

app.use(express.json());

app.use("/login", loginRoutes);

app.use("/weather", weatherRoutes);

app.use("/posts", postsRoutes);

app.use(notFoundMiddleware);

app.use(globalErrorHandler);

module.exports = app;