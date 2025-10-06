const AppError = require("./AppError");

class AuthenticationError extends AppError {
  constructor(message = "Not authenticated.") {
    super(message, 401);
  }
}

module.exports = AuthenticationError;
