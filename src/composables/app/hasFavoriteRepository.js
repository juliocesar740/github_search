const getFavoriteRepositories = require("./getFavoriteRepositories");

/**
 * Check if the local storage has this repository
 * @param {Object} repo
 * @returns {boolean}
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
