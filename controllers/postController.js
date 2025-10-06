const postService = require("../services/postService");

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
};