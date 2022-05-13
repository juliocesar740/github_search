/**
 * Get all favorite repositories
 */
function getFavoritesRepositories() {
  const favoriteRepositoriesJson = JSON.parse(
    localStorage.getItem("APP_FAVORITE_REPOSITORIES")
  );

  return {
    favoriteRepositories: favoriteRepositoriesJson,
  };
}

module.exports = getFavoritesRepositories;
