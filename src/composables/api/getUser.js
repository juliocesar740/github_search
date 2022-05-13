const axios = require("axios");

/**
 * Get the user
 * @param {string} username
 * @returns {(object|null)} the user's object or null
 */
async function getUser(username) {
  try {
    const request = await axios.get(`https://api.github.com/users/${username}`);
    const data = request.data;

    return data;
  } catch (error) {
    return null;
  }
}

module.exports = getUser;
