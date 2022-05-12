<template>
  <div class="repositories">
    <div
      class="repository"
      v-for="(repository, counter) in repositories.sort(
        (x, y) => y.stargazers_count - x.stargazers_count
      )"
      :key="repository.id"
    >
      <div class="flex-row">
        <h3>{{ repository.name }}</h3>
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
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { useRoute, onBeforeRouteUpdate } = require("vue-router");
const getRepositories = require("@/composables/api/getUserRepositories");
const storeFavoriteRepository = require("@/composables/app/storeFavoriteRepository");
const hasFavoriteRepository = require("@/composables/app/hasFavoriteRepository");
const { onMounted } = require("@vue/runtime-core");

// eslint-disable-next-line no-undef
const props = defineProps({
  user: Object,
});

const route = useRoute();
const repositories = ref("");
repositories.value = await getRepositories(route.params.name);

const user = ref(props.user);
const loadingActive = ref(false);
const stars = ref("");
const repo_page = ref(15);
const scrollToBottomCount = ref(0);

onBeforeRouteUpdate(async (to) => {
  repositories.value = await getRepositories(to.params.name);
});

function starIconHandler(num, login, repo) {
  if (storeFavoriteRepository(login, repo)) {
    stars.value[num].classList.add("star-gold");
  }
}
const scroll = (window.onscroll = async () => {
  let bottomOfWindow =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;

  if (bottomOfWindow) {
    scrollToBottomCount.value += 1;
    if (scrollToBottomCount.value > 1) return -1;

    if (repositories.value.length >= user.value.public_repos) return -1;

    console.log("OK");
    loadingActive.value = true;
    repo_page.value += 15;

    repositories.value = await getRepositories(
      route.params.name,
      repo_page.value
    );

    if (repositories.value) {
      loadingActive.value = false;
      scrollToBottomCount.value = 0;
    }
  }

  return -1;
});

onMounted(() => {
  scroll();
});
</script>

<style setup>
.repositories {
  display: flex;
  flex-direction: column;
}
.repository {
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
}

.repository h3 {
  word-wrap: break-word;
  padding-right: 3.5px;
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
