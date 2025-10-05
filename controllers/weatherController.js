const openWeatherService = require("../services/openWeatherService");

const getWeatherByCity = async (req, res, next) => {
  try {
    const { city } = req.params;

    const weather = await openWeatherService.getWeatherByCity(city);

    res.status(200).json(weather);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWeatherByCity,
};