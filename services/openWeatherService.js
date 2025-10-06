const axios = require("axios");
const { OPENWEATHER_BASE_URL, OPENWEATHER_API_KEY } = require("../config/config");
const ServiceUnavailableError = require("../utils/ServiceUnavailableError");
const NotFoundError = require("../utils/NotFoundError");

const formatCityWeather = (data) => (
  {
    city: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
    description: data.weather[0].description,
    temperature: data.main.temp,
    clouds: data.clouds.all,
  }
);

const formatForecastPeriod = (period) => (
  {
    timestamp: period.dt,
    dateTime: period.dt_txt,
    temperature: period.main.temp,
    weather: period.weather[0].main,
    description: period.weather[0].description,
  }
);

const formatForecastData = (data) => {
    const cityInfo = {
      city: data.city.name,
      country: data.city.country,
      numPeriods: data.cnt,
    };
    
    const forecastList = data.list.map(period => formatForecastPeriod(period));

    return {
        ...cityInfo,
        periods: forecastList,
    };
};

const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);

    return formatCityWeather(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new NotFoundError(`City '${city}' not found.`);
    }

    throw new ServiceUnavailableError();
  }
};

const getWeatherForecastByCity = async (city) => {
  try {
    const response = await axios.get(`${OPENWEATHER_BASE_URL}/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}`);

    return formatForecastData(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new NotFoundError(`City '${city}' not found.`);
    }

    throw new ServiceUnavailableError();
  }
};

module.exports = {
  getWeatherByCity,
  getWeatherForecastByCity,
};