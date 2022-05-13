<template>
  <div class="repositories-skeleton-loading">
    <div class="repository-skeleton-loading" v-for="i in 15" :key="i"></div>
  </div>
</template>

<script setup></script>

<style setup>
.repositories-skeleton-loading {
  display: flex;
  flex-direction: column;
}
.repository-skeleton-loading {
  background-color: rgb(208, 215, 215);
  border-radius: 5px;
  height: 150px;
  width: 100%;
  margin-bottom: 15px;
}

/* Media Queries */
@media screen and (max-width: 900px) {
  .repositories {
    width: 95%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 400px) {
  .repository {
    min-height: 150px;
  }
  .repository div:first-child {
    min-height: 40px;
  }
}
</style>
