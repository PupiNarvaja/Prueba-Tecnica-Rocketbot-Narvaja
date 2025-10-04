// Mock of a model, with DB connection, etc.
const { APP_USERNAME, PASSWORD } = require("../config/config");

class UserModel {
  async isPasswordValid(username, password) {
    return username === APP_USERNAME && password === PASSWORD;
  }

  async exists(username) {
    return username === APP_USERNAME;
  }

  async getUserByUsername(username) {
    const user = {
      id: 1,
      firstname: "administrator",
      status: "active"
    }

    return user;
  }
};

module.exports = new UserModel();