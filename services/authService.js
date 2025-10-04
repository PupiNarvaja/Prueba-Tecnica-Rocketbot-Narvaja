const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config/config");

const generateToken = (user) => {
  const options = {
    expiresIn: JWT_EXPIRES_IN
  };

  try {
    return jwt.sign(user, JWT_SECRET, options);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
