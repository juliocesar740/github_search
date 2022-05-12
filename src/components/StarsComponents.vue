<template>
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
</template>

<script setup></script>

<style scoped>
.stars {
  display: flex;
  flex-direction: column;
}

/* Media Queries */
@media screen and (max-width: 900px) {
  .stars {
    width: 95%;
    margin: 15px auto;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    order: 2;
    grid-row: 3 / 2;
    gap: 20px;
  }

  .star > p {
    margin: 5px 0;
  }
}
</style>
