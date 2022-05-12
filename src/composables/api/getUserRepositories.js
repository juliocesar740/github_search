const axios = require("axios");

async function getUserRepositories(username, per_page = 15) {
  const request = await axios(
    `https://api.github.com/users/${username}/repos?per_page=${per_page}`
  );
  const data = request.data;

  return data;
}

module.exports = getUserRepositories;
