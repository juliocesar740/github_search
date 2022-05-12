<template>
  <div class="favorites-repositories-container">
    <nav>
      <h1>Repositórios favoritos</h1>
      <form action="" method="get" @submit.prevent="onSubmit">
        <div class="form-group form-group-row">
          <div class="input-form">
            <input
              type="text"
              name=""
              id=""
              placeholder="Pesquise o usuário"
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
    <FavoriteRepositories />
  </div>
</template>

<script setup>
import FavoriteRepositories from "@/components/FavoriteRepositoriesComponent.vue";
const { ref } = require("@vue/reactivity");
const { useRouter } = require("vue-router");

const router = useRouter();
const inputData = ref("");

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

.favorites-repositories-container > nav {
  width: 95%;
  margin: 0 auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 150px;
  margin-bottom: 30px;
}

.favorites-repositories-container > nav:first-child {
  padding: 0 6.25%;
}

.form-group {
  width: 40vw;
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

/* Media queries */

@media screen and (max-width: 700px) {
  .favorites-repositories-container > nav {
    gap: 50px;
  }
  .favorites-repositories-container > nav:first-child {
    padding: 0;
  }

  .favorites-repositories-container > nav > h1 {
    font-size: 20px;
  }
  .form-group {
    width: 285px;
  }
}

@media screen and (max-width: 530px) {
  .favorites-repositories-container > nav {
    gap: 20px;
  }

  .favorites-repositories-container > nav > h1 {
    font-size: 18px;
  }
  .form-group {
    width: 220px;
  }
  .input-form {
    width: 85%;
  }

  .input-form:nth-of-type(2) {
    width: 15%;
  }
}

@media screen and (max-width: 415px) {
  .form-group {
    width: 180px;
  }
  .input-form > input[type="text"] {
    font-size: 0.875rem;
  }
}
</style>
