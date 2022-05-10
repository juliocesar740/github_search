<template>
  <div class="favorites-repositories-container">
    <nav>
      <h1>Repositórios favoritos</h1>
      <form action="" method="get" @submit.prevent="onSubmit">
        <div class="form-group form-group-row">
          <div class="input-form">
            <input type="text" name="" id="" placeholder="Pesquise o usuário" />
          </div>
          <div class="input-form">
            <button type="submit" class="btn-submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </form>
    </nav>
    <div class="favorites-repositories">
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
  </div>
</template>

<script setup>
const getFavoriteRepositories = require("@/composables/app/getFavoriteRepositories");
const { favoriteRepositories } = getFavoriteRepositories();
</script>

<style scoped>
h2,
h3 {
  margin: 0;
}
.favorites-repositories-container {
  /* border: 1px solid red; */
}

.favorites-repositories-container > nav {
  /* border: 1px solid blue; */
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* gap: 150px; */
  margin-bottom: 30px;
}

/* .favorites-repositories-container > nav:first-child {
  padding: 0 4.25%;
} */

.form-group {
  width: 500px;
}

.form-group-row {
  display: flex;
  flex-direction: row;
}

.input-form {
  width: 90%;
}

.input-form:nth-of-type(2) {
  width: 10%;
}

.input-form > input[type="text"] {
  width: 100%;
  height: 33px;
  outline: none;
  /* border: 1px solid black; */
  padding: 7.5px;
  font-size: 1rem;
}
.input-form > button {
  height: 33px;
  width: 100%;
}

.btn-submit {
  border: none;
  background-color: black;
  cursor: pointer;
  transition: 250ms ease;
}

.btn-submit > i {
  color: white;
}

.btn-submit:hover {
  background-color: rgb(33, 34, 35);
}

.favorites-repository {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.favorite-repository {
  border: 1px solid black;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
}

.repository__stars {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}
</style>
