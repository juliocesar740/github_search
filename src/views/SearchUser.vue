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
      <User />
      <Repositories :user="user" />
      <Stars />
    </div>
    <div class="loading" v-if="loadingActive"></div>
  </div>
</template>

<script setup>
import User from "@/components/UserComponent.vue";
import Repositories from "@/components/RepositoriesComponent.vue";
import Stars from "@/components/StarsComponents.vue";

const { ref } = require("@vue/reactivity");
const { useRoute, useRouter } = require("vue-router");
const getUser = require("@/composables/api/getUser");

const inputData = ref("");
const router = useRouter();
const route = useRoute();

const user = ref("");
user.value = await getUser(route.params.name);

const loadingActive = ref(false);

// functions
function onSubmit() {
  // Go to the search page
  router.push({ name: "searchUser", params: { name: inputData.value } });
}
</script>

<style scoped>
h2,
h3 {
  margin: 0;
}
.search-container > nav {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 150px;
  margin-bottom: 30px;
}

.search-container > nav:first-child {
  padding: 0 6.25%;
}

.form-group {
  width: 50vw;
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
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.loading {
  margin: 0 auto;
  width: 36px;
  height: 36px;
  border: 4px solid rgb(0, 0, 0);
  border-top: 4px solid white;
  border-left: 2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Media queries */
@media screen and (max-width: 900px) {
  .main {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
}

@media screen and (max-width: 600px) {
  .search-container > nav {
    justify-content: center;
    gap: 15px;
  }
  .search-container > nav:first-child {
    padding: 0;
  }
  .search-container > nav:first-child > * {
    font-size: 20px;
  }

  .form-group {
    width: 300px;
  }
}
@media screen and (max-width: 400px) {
  .search-container > nav {
    justify-content: left;
  }
  .search-container > nav:first-child > * {
    font-size: 16.85px;
  }
  .form-group {
    width: 100%;
  }
  .input-form {
    width: 85%;
  }

  .input-form:nth-of-type(2) {
    width: 15%;
  }
}
</style>
