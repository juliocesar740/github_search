import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchUser from "../views/SearchUser.vue";
import FavoritesView from "../views/FavoritesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search/:name",
    name: "search",
    component: SearchUser,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
