const AppError = require("./AppError");

class ServiceUnavailableError extends AppError {
  constructor(message = "This service is currently unavailable.") {
    super(message, 503);
  }
}

module.exports = ServiceUnavailableError;
