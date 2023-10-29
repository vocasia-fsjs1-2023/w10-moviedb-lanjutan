const jwt = require('jsonwebtoken');
const secret = 'rahasia';

function authenticateUser(req, res, next) {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    const decodedToken = jwt.verify(token, secret);
    req.userId = decodedToken.id;
    req.email = decodedToken.email;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authenticateUser;