<template>
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
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { useRoute, onBeforeRouteUpdate } = require("vue-router");
const getUser = require("@/composables/api/getUser");

const route = useRoute();
const user = ref("");
user.value = await getUser(route.params.name);

onBeforeRouteUpdate(async (to) => {
  user.value = await getUser(to.params.name);
});
</script>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  padding: 2.5px 0;
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

/* Media Queries */
@media screen and (max-width: 900px) {
  .user {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }

  #user-info__login {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 400px) {
  .user {
    flex-direction: column;
  }
}
</style>
