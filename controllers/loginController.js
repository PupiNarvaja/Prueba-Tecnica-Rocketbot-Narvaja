const AuthenticationError = require("../utils/AuthenticationError");

const login = (req, res, next) => {
  return next(new AuthenticationError("Invalid credentials."));
  res.status(200).send("Setting folders and project structure.");
};

module.exports = {
  login,
};