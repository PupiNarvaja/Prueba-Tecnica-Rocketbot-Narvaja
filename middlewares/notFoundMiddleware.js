const NotFoundError = require("../utils/NotFoundError");

const notFoundMiddleware = (req, res, next) => {
  next(new NotFoundError(`Endpoint '${req.originalUrl}' not found.`));
};

module.exports = notFoundMiddleware;