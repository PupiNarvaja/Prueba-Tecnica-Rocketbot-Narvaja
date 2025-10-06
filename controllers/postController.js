const postService = require("../services/postService");

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { userId, body } = req.body;

    const post = await postService.createPost(userId, body);

    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
};