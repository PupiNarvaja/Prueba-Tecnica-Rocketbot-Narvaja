const AppError = require("./AppError");

class ServiceUnavailableError extends AppError {
  constructor(message = "This service is currently unavailable.") {
    super(503, message);
  }
}

module.exports = ServiceUnavailableError;
