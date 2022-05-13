<template>
  <div class="user-skeleton-loading">
    <div class="skeleton-loading__img"></div>
    <div class="user-info-skeleton-loading">
      <div class="skeleton-loading__info"></div>
      <div class="skeleton-loading__info"></div>
      <div class="skeleton-loading__info"></div>
      <div class="skeleton-loading__info"></div>
      <div class="skeleton-loading__info"></div>
      <div class="skeleton-loading__info"></div>
      <div class="skeleton-loading__info"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.user-skeleton-loading,
.user-info-skeleton-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info-skeleton-loading {
  width: 100%;
}

.skeleton-loading__img {
  width: 170px;
  height: 170px;
  background-color: rgb(208, 215, 215);
  margin-bottom: 5px;
}

.skeleton-loading__info {
  width: 80%;
  height: 22px;
  margin: 5px 0;
  background-color: rgb(208, 215, 215);
}

/* Media Queries */
@media screen and (max-width: 900px) {
  .user-skeleton-loading {
    width: 95%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 25px;
  }
  .skeleton-loading__info {
    width: 250px;
  }
  .user-info-skeleton-loading {
    width: auto;
  }
}
@media screen and (max-width: 460px) {
  .skeleton-loading__info {
    width: 50vw;
  }
}
@media screen and (max-width: 400px) {
  .user-skeleton-loading {
    flex-direction: column;
    align-items: center;
  }
  .skeleton-loading__info {
    width: 250px;
  }
}
</style>
