const axios = require("axios");
const getFavoriteRepositories = require("./getFavoriteRepositories");

async function storeFavoriteRespository(owner, repo) {
  const request = await axios(`https://api.github.com/repos/${owner}/${repo}`);
  const data = request.data;

  const { favoriteRepositories } = getFavoriteRepositories();
  favoriteRepositories.push(data);

  localStorage.setItem(
    "APP_FAVORITE_REPOSITORIES",
    JSON.stringify(favoriteRepositories)
  );
  console.log(getFavoriteRepositories());
}

module.exports = storeFavoriteRespository;
