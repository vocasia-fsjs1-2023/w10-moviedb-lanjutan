const jwt = require("jsonwebtoken");
const secret = "rahasia";

async function authentication(req, res, next) {
  try {
    const headers = req.headers;

    const bearer = headers.authorization;
    const token = bearer.slice(7);

    console.log(token);

    const decoded = jwt.verify(token, secret);
    console.log(decoded);

    req.userId = decoded.id;
    req.email = decoded.email;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
