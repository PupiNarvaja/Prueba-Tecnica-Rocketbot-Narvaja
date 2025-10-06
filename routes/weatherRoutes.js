const router = require("express").Router();
const weatherController = require("../controllers/weatherController");
const authMiddleware = require("../middlewares/authMiddleware");

// "/weather"
router.use(authMiddleware);

router.route("/current/:city")
  .get(weatherController.getCurrentWeatherByCity);

router.route("/forecast/:city")
  .get(weatherController.getWeatherForecastByCity);

module.exports = router;