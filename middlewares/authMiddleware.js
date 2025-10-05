const AuthenticationError = require("../utils/AuthenticationError");
const authService = require("../services/authService");
const { TokenExpiredError, JsonWebTokenError } = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
      const authHeader = req.headers.authorization;
    
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new AuthenticationError("Access denied. Bearer Token missing or improperly formatted."));
      }
    
      const token = authHeader.split(" ")[1];
    
      const decoded = authService.verifyToken(token);
    
      req.user = decoded;
    
      next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return next(new AuthenticationError("Please, log in again."))
    }

    if (error instanceof JsonWebTokenError) {
      return next(new AuthenticationError("Log in failed."))
    }

    return next(error);
  }
};

module.exports = authMiddleware;