const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const APP_USERNAME = process.env.APP_USERNAME;
const PASSWORD = process.env.PASSWORD;

// JWT
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

// OpenWeather
const OPENWEATHER_BASE_URL = process.env.OPENWEATHER_BASE_URL;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

module.exports = {
  NODE_ENV,
  PORT,
  APP_USERNAME,
  PASSWORD,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  OPENWEATHER_BASE_URL,
  OPENWEATHER_API_KEY,
};
