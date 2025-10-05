const router = require("express").Router();
const weatherController = require("../controllers/weatherController");
const authMiddleware = require("../middlewares/authMiddleware");

// "/weather"
router.use(authMiddleware);

router.route("/:city")
  .get(weatherController.getWeatherByCity);

module.exports = router;