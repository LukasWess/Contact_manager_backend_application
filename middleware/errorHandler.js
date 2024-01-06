const { constants } = require(("../constants"));

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  let response;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
    response = {
      title: "Validation Failed",
      message: err.message,
      stackTrace: err.stack,
    };
    break;
  case constants.NOT_FOUND:
    response = {
      title: "Not Found",
      message: err.message,
      stackTrace: err.stack,
    };
    break;
  case constants.UNAUTHORIZED:
    response = {
      title: "Unauthorized",
      message: err.message,
      stackTrace: err.stack,
    };
    break;
  case constants.FORBIDDEN:
    response = {
      title: "Forbidden",
      message: err.message,
      stackTrace: err.stack,
    };
    break;
  case constants.SERVER_ERROR:
    response = {
      title: "Server Error",
      message: err.message,
      stackTrace: err.stack,
    };
    break;
  default:
    console.log("No Error");
    response = { title: "Not Found", message: err.message, stackTrace: err.stack };
    break;
  }
  res.json(response);
};

module.exports = errorHandler;