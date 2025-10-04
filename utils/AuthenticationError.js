const AppError = require("./AppError");

class AuthenticationError extends AppError {
  constructor(message = "Not authenticated.") {
    super(401, message);
  }
}

module.exports = AuthenticationError;
