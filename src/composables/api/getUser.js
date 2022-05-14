const axios = require("axios");
const getUserStarredRepositoriesCount = require("./getUserStarredRepositoriesCount");

/**
 * Get the user
 * @param {string} username
 * @returns {(object|null)} the user's object or null
 */
async function getUser(username) {
  try {
    const request = await axios.get(`https://api.github.com/users/${username}`);
    const data = request.data;

    // get user starred repositories count
    const starredRepositoriesCount = await getUserStarredRepositoriesCount(
      username
    );
    data["starred_repositories"] = starredRepositoriesCount;

    return data;
  } catch (error) {
    return null;
  }
}

module.exports = getUser;
