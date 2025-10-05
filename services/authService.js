const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config/config");

const generateToken = (user) => {
  const options = {
    expiresIn: JWT_EXPIRES_IN
  };

  return jwt.sign(user, JWT_SECRET, options);
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
