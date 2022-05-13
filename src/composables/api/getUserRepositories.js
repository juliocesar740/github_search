const axios = require("axios");

/**
 * Get the repositories
 * @param {string} username
 * @param {number} per_page
 * @returns {(object|Array)} the repositories array or an empty array
 */
async function getUserRepositories(username, per_page = 15) {
  try {
    const request = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=${per_page}`,
      {
        headers: {
          Authorization: "Bearer " + "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",
        },
      }
    );
    const data = request.data;

    return data;
  } catch (error) {
    return [];
  }
}

module.exports = getUserRepositories;
