const openWeatherService = require("../services/openWeatherService");

const getCurrentWeatherByCity = async (req, res, next) => {
  try {
    const { city } = req.params;

    const weather = await openWeatherService.getWeatherByCity(city);

    res.status(200).json(weather);
  } catch (error) {
    next(error);
  }
};

const getWeatherForecastByCity = async (req, res, next) => {
  try {
    const { city } = req.params;

    const forecast = await openWeatherService.getWeatherForecastByCity(city);

    res.status(200).json(forecast);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCurrentWeatherByCity,
  getWeatherForecastByCity,
};