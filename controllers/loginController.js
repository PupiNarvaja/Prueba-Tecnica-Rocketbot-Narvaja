const userModel = require("../models/userModel");
const AuthenticationError = require("../utils/AuthenticationError");
const authService = require("../services/authService");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!await userModel.exists(username) || !await userModel.isPasswordValid(username, password)) {
      return next(new AuthenticationError("Invalid credentials."));
    }

    const user = await userModel.getUserByUsername(username);

    const token = authService.generateToken(user);

    if (!token) {
      return next(new AuthenticationError("Login failed."));
    }

    const jsonRes = {
      message: `Hi ${username}.`,
      user,
      token
    };
  
    res.status(200).json(jsonRes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};