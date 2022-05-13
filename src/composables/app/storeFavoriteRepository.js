const axios = require("axios");
const getFavoriteRepositories = require("./getFavoriteRepositories");
const hasFavoriteRepository = require("./hasFavoriteRepository");

/**
 * Store the repository in the local storage
 * @param {string} owner
 * @param {string} repo
 * @returns {null|void}
 */
async function storeFavoriteRepository(owner, repo) {
  if (hasFavoriteRepository(repo)) return -1;

  const request = await axios(
    `https://api.github.com/repos/${owner}/${repo.name}`
  );
  const data = request.data;

  const { favoriteRepositories } = getFavoriteRepositories();
  favoriteRepositories.push(data);

  localStorage.setItem(
    "APP_FAVORITE_REPOSITORIES",
    JSON.stringify(favoriteRepositories)
  );
}

module.exports = storeFavoriteRepository;
