const axios = require("axios");
const { OPENWEATHER_BASE_URL, OPENWEATHER_API_KEY } = require("../config/config");
const AppError = require("../utils/AppError");

const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);

    return response.data;
  } catch (error) {
    // Create custom errors. (503, 404).

    throw new AppError(503, "External service error.");
  }
}

module.exports = {
  getWeatherByCity,
};