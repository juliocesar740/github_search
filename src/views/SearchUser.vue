<template>
  <div class="search-container">
    <nav>
      <h1 style="font-weight: 300">
        <span style="font-weight: 600">Github </span>
        <i style="font-weight: 500; color: rgb(36, 39, 43)">Search</i>
      </h1>
      <form action="" method="get" @submit.prevent="onSubmit">
        <div class="form-group form-group-row">
          <div class="input-form">
            <input
              type="text"
              name=""
              id=""
              placeholder="Pesquise um usuário"
              v-model="inputData"
            />
          </div>
          <div class="input-form">
            <button type="submit" class="btn-submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </form>
    </nav>
    <div class="main">
      <div class="user">
        <div class="user__avatar">
          <img :src="`${user.avatar_url}`" height="170" width="170" />
        </div>
        <div class="user-info">
          <h2>{{ user.name }}</h2>
          <h3 id="user-info__login">{{ user.login }}</h3>
          <div class="user-icon">
            <i class="bi bi-briefcase"></i>
            <span>{{ user.company || "undefined" }}</span>
          </div>
          <div class="user-icon">
            <i class="bi bi-geo"></i>
            <span>{{ user.location || "undefined" }}</span>
          </div>
          <div class="user-icon">
            <i class="bi bi-star"></i>
            <span>{{ 0 }}</span>
          </div>
          <div class="user-icon">
            <i class="bi bi-archive"></i>
            <span>{{ user.public_repos || "undefined" }}</span>
          </div>
          <div class="user-icon">
            <i class="bi bi-people"></i>
            <span>{{ user.followers || "undefined" }}</span>
          </div>
        </div>
      </div>
      <div class="respositories">
        <div
          class="repository"
          v-for="(repository, counter) in repositories"
          :key="repository.id"
        >
          <div class="flex-row">
            <h2>{{ repository.name }}</h2>
            <div class="star-mark">
              <i
                ref="stars"
                class="bi bi-star"
                :class="{
                  'star-gold': hasFavoriteRepository(repository),
                }"
                @click.once="
                  starIconHandler(counter, repository.owner.login, repository)
                "
              ></i>
            </div>
          </div>

          <p style="word-wrap: break-word">{{ repository.description }}</p>
          <div class="repository__stars">
            <i class="bi bi-star"></i>
            <span>{{ repository.stargazers_count }}</span>
          </div>
        </div>
      </div>
      <div class="stars">
        <div class="star">
          <i class="bi bi-star" style="color: gold"></i>
          <p>Repositório favoritado</p>
        </div>
        <div class="star">
          <i class="bi bi-star"></i>
          <p>Repositório não favoritado</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { useRoute, useRouter, onBeforeRouteUpdate } = require("vue-router");
const getUser = require("@/composables/api/getUser");
const getRepositories = require("@/composables/api/getUserRepositories");
const storeFavoriteRepository = require("@/composables/app/storeFavoriteRespository");
const hasFavoriteRepository = require("@/composables/app/hasFavoriteRepository");

const inputData = ref("");
const router = useRouter();
const route = useRoute();

const user = ref("");
user.value = await getUser(route.params.name);

const repositories = ref("");
repositories.value = await getRepositories(route.params.name);

const stars = ref("");

// functions
function onSubmit() {
  // Go to the search page
  router.push({ name: "searchUser", params: { name: inputData.value } });
}

function starIconHandler(num, login, repo) {
  console.log(num);
  if (storeFavoriteRepository(login, repo)) {
    stars.value[num].classList.add("star-gold");
  }
}

// const changeRepos = computed(async () => {
//   const repositories = await getRepositories(route.params.name);
//   return repositories;
// });

onBeforeRouteUpdate(async (to) => {
  user.value = await getUser(to.params.name);
  repositories.value = await getRepositories(to.params.name);
});
</script>

<style scoped>
h2,
h3 {
  margin: 0;
}
.search-container {
  /* border: 1px solid red; */
}

.search-container > nav {
  /* border: 1px solid blue; */
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
  gap: 150px;
  margin-bottom: 30px;
}

.search-container > nav:first-child {
  padding: 0 4.25%;
}

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

.main {
  /* border: 1px solid black; */
  /* min-height: 1vh; */
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#user-info__login {
  margin-top: 3.5px;
  margin-bottom: 20px;
}

.user-icon {
  margin-bottom: 5px;
}
.user-icon > span {
  margin-left: 8.5px;
}

.respositories {
  display: flex;
  flex-direction: column;
}

.repository {
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  /* background-color: rgba(234, 240, 240, 0.825); */
  width: 100%;
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
  gap: 5px;
}

.flex-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.star-mark > i {
  cursor: pointer;
  font-size: 1.5rem;
  transition: 250ms ease;
}

.star-gold {
  color: gold;
}

.star-mark > i:hover {
  color: gold;
}

.stars {
  /* border: 1px solid blue; */
}
</style>
