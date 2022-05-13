const axios = require("axios");

/**
 * Get the user
 * @param {string} username
 * @returns {(object|null)} the user's object or null
 */
async function getUser(username) {
  try {
    const request = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: "Bearer " + "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",
        },
      }
    );
    const data = request.data;

    return data;
  } catch (error) {
    return null;
  }
}

module.exports = getUser;
