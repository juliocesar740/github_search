const axios = require("axios");

/**
 * Get the number of starred repositories
 * @param {string} username
 * @returns {(number|null)} the number of starred repositories or null
 */
async function getUserStarredRepositoriesCount(username) {
  try {
    const request = await axios.get(
      `https://api.github.com/users/${username}/starred`
    );
    const data = request.data;

    return data.length;
  } catch (error) {
    return null;
  }
}

module.exports = getUserStarredRepositoriesCount;
