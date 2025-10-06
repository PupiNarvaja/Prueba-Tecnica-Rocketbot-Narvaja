const axios = require("axios");
const { JSONPlaceholder_BASE_URL } = require("../config/config");
const ServiceUnavailableError = require("../utils/ServiceUnavailableError");
const NotFoundError = require("../utils/NotFoundError");

const getAllPosts = async () => {
  try {
    const response = await axios.get(`${JSONPlaceholder_BASE_URL}/posts`);

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new NotFoundError(`No posts found.`);
    }

    throw new ServiceUnavailableError();
  }
};

const createPost = async () => {
  try {
    const response = await axios.post(`${JSONPlaceholder_BASE_URL}/posts`);

    return response.data;
  } catch (error) {
    throw new ServiceUnavailableError();
  }
};

module.exports = {
  getAllPosts,
  createPost,
};