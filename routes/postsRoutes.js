const router = require("express").Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middlewares/authMiddleware");

// "/posts"
router.use(authMiddleware);

router.route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

router.route("/:userId")
  .get(postController.getPostsByUserId);

module.exports = router;