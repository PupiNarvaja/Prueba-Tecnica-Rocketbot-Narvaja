const axios = require("axios");
const { OPENWEATHER_BASE_URL, OPENWEATHER_API_KEY } = require("../config/config");
const ServiceUnavailableError = require("../utils/ServiceUnavailableError");
const NotFoundError = require("../utils/NotFoundError");

const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new NotFoundError(`City '${city}' not found.`);
    }

    throw new ServiceUnavailableError();
  }
}

module.exports = {
  getWeatherByCity,
};