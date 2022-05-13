<template>
  <nav class="navbar">
    <router-link to="/">Home </router-link>
    <router-link to="/favorites">Favoritos</router-link>
  </nav>
  <Suspense>
    <template #default> <router-view /> </template>
    <template #fallback>error</template>
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

*::selection {
  background-color: rgb(0, 132, 255);
  color: white;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: black;
  text-decoration: none;
  margin: 0 5px;
  transition: 250ms ease;
}

a:hover {
  color: orangered;
}

.navbar {
  padding: 5px 0;
}
</style>
