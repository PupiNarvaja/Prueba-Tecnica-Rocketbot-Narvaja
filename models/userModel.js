// Mock of a model, with DB connection, etc.
class UserModel {
  async isPasswordValid(username, password) {
    return username === process.env.APP_USERNAME && password === process.env.PASSWORD;
  }

  async exists(username) {
    return username === process.env.APP_USERNAME;
  }
};

module.exports = new UserModel();