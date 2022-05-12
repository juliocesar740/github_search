<template>
  <div class="favorite-repositories">
    <div class="" v-if="!favoriteRepositories.length">
      There's no favorite repositories yet
    </div>
    <div
      class="favorite-repository"
      v-for="favoriteRepository in favoriteRepositories"
      :key="favoriteRepository.id"
      v-else
    >
      <h2>{{ favoriteRepository.name }}</h2>
      <p>{{ favoriteRepository.description }}</p>
      <div class="repository__stars">
        <i class="bi bi-star"></i>
        <span>{{ favoriteRepository.stargazers_count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const getFavoriteRepositories = require("@/composables/app/getFavoriteRepositories");
const { favoriteRepositories } = getFavoriteRepositories();
</script>

<style scoped>
.favorite-repositories {
  display: flex;
  flex-direction: column;
}

.favorite-repository {
  border: 1px solid black;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
}

.repository__stars {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}
</style>
