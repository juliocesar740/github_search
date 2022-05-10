const axios = require("axios");

async function getUserRepositories(username) {
  const request = await axios(
    `https://api.github.com/users/${username}/repos?per_page=10`
  );
  const data = request.data;

  return data;
}

module.exports = getUserRepositories;
