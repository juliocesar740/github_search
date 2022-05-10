<template>
  <div class="main">
    <div class="wrapper">
      <h1 style="font-weight: 300">
        <span style="font-weight: 600">Github </span>
        <i style="font-weight: 500; color: rgb(36, 39, 43)">Search</i>
      </h1>
      <form action="" method="get" @submit.prevent="onSubmit">
        <div class="form-group form-group-row">
          <div class="input-form">
            <input type="text" name="" id="" v-model="inputData" />
          </div>
          <div class="input-form">
            <button type="submit" class="btn-submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { useRouter } = require("vue-router");
const inputData = ref("");
const router = useRouter();

function onSubmit() {
  // Go to the search page
  router.push({ name: "searchUser", params: { name: inputData.value } });
}
</script>

<style scoped>
h1 {
  margin: 5px 0;
}
.main {
  /* border: 1px solid red; */
  width: 90%;
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
}

.main > .wrapper {
  width: 35%;
}

.form-group {
  width: 100%;
}

.form-group-row {
  display: flex;
  flex-direction: row;
}

.input-form {
  width: 85%;
}

.input-form:nth-of-type(2) {
  width: 15%;
}

.input-form > input[type="text"] {
  width: 100%;
  height: 33px;
  outline: none;
  border: 1px solid black;
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
  font-size: 1.05rem;
}

.btn-submit:hover {
  background-color: rgb(33, 34, 35);
}
</style>
