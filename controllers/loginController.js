const userModel = require("../models/userModel");
const AuthenticationError = require("../utils/AuthenticationError");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!await userModel.exists(username) || !await userModel.isPasswordValid(username, password)) {
      return next(new AuthenticationError("Invalid credentials."));
    }
  
    res.status(200).json({ message: `Hi ${username}.` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};