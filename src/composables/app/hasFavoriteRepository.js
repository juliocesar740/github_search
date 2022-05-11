const getFavoriteRepositories = require("./getFavoriteRepositories");

/**
 * Check if the localstorage has this repository
 * @param {Object} repo
 * @returns
 */
function hasFavoriteRepository(repo) {
  const { favoriteRepositories } = getFavoriteRepositories();

  return favoriteRepositories.reduce((prev, next) => {
    if (next.id === repo.id) {
      prev = true;
    }
    return prev;
  }, false);
}

module.exports = hasFavoriteRepository;
