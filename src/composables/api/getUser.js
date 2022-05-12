const axios = require("axios");

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
    console.log(data);

    return data;
  } catch (error) {
    return null;
  }
}

module.exports = getUser;
