const getWeatherByCity = async (req, res, next) => {
  try {
    const { city } = req.params;

    const weatherInfo = {
      city: `Requested city: ${city}`,
    };
  
    res.status(200).json(weatherInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWeatherByCity,
};