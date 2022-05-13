<template>
  <div class="user">
    <div class="user__avatar">
      <img
        loading="lazy"
        :src="`${user.avatar_url}`"
        height="170"
        width="170"
      />
    </div>
    <div class="user-info">
      <h2>{{ user.name || "Não encontrado" }}</h2>
      <h3 id="user-info__login">{{ user.login }}</h3>
      <div class="user-icon">
        <i class="bi bi-briefcase"></i>
        <span>{{ user.company || "Não encontrado" }}</span>
      </div>
      <div class="user-icon">
        <i class="bi bi-geo"></i>
        <span>{{ user.location || "Não encontrado" }}</span>
      </div>
      <div class="user-icon">
        <i class="bi bi-star"></i>
        <span>{{ 0 }}</span>
      </div>
      <div class="user-icon">
        <i class="bi bi-archive"></i>
        <span>{{ user.public_repos || "Não encontrado" }}</span>
      </div>
      <div class="user-icon">
        <i class="bi bi-people"></i>
        <span>{{ user.followers || "Não encontrado" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const getUser = require("@/composables/api/getUser");
const { ref } = require("@vue/reactivity");
const { useRoute } = require("vue-router");
const route = useRoute();
const user = ref("");
user.value = await getUser(route.params.name);
</script>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  padding: 2.5px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-info > h2 {
  font-weight: normal;
  margin-bottom: 5px;
  font-size: 17.5px;
  word-wrap: break-word;
}

#user-info__login {
  font-size: 15px;
  color: rgb(36, 36, 36);
  margin-top: 3.5px;
  margin-bottom: 15px;
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
