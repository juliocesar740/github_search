/**
 * Setup the local storage
 */
function setupLocalStorage() {
  if (!localStorage.getItem("APP_FAVORITE_REPOSITORIES")) {
    localStorage.setItem("APP_FAVORITE_REPOSITORIES", "[]");
  }
}

module.exports = setupLocalStorage;
