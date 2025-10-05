const globalErrorHandler = (err, req, res, next) => {
  const STATUS = err.statusCode || 500;
  const DEFAULT_MESSAGE = "Something went wrong.";
  let message = err.message || DEFAULT_MESSAGE;

  if (!err.isOperational) {
    console.error(err.stack);
    message = DEFAULT_MESSAGE;
  };
  
  res.status(STATUS).json({ message });
};

module.exports = globalErrorHandler;