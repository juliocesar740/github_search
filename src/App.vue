<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/favorites">Favoritos</router-link>
  </nav>
  <router-view />
</template>

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
