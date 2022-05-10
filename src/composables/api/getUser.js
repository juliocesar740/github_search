const axios = require("axios");

async function getUser(username) {
  const request = await axios(`https://api.github.com/users/${username}`);
  const data = request.data;

  return data;
}

module.exports = getUser;
