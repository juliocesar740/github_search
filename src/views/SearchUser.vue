<template>
  <h1>{{ user }}</h1>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { useRoute } = require("vue-router");

const route = useRoute();
const user = ref("");
user.value = route.params.name;

console.log(route.params.name);
</script>

<style></style>
