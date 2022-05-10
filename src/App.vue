<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/favorites">Favoritos</router-link>
  </nav>
  <Suspense>
    <template #default> <router-view /> </template>
    <template #fallback>Failed</template>
  </Suspense>
</template>

<script setup>
// Setup the localstorage to store the repositories
const setupLocalStorage = require("@/composables/app/setupLocalStorage");
setupLocalStorage();
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
