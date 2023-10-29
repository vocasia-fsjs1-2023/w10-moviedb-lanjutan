async function errorHandling(error, req, res, next) {
  const errName = error?.name;
  const errMessage = error?.message;

  console.error(errMessage, errName);

  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  if (errName === "UnauthorizedError") {
    statusCode = 401;
    errorMessage = errMessage || "Unauthorized";
  } else if (errName === "ForbiddenError") {
    statusCode = 403;
    errorMessage = errMessage || "Forbidden";
  } else if (errName === "ReferenceError") {
    statusCode = 404;
    errorMessage = errMessage || "Not Found";
  }

  res.status(statusCode).json({ message: errorMessage });
}

module.exports = errorHandling;