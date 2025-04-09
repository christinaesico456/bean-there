import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserProfile from "../views/UserProfile.vue";
import SearchResults from "../views/SearchResults.vue";
import { ref } from 'vue';


const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/profile",
    name: "userProfile",
    component: UserProfile,
  },
  {
    path: "/search",
    name: "searchResults",
    component: SearchResults,
    props: route => ({ query: route.query.q, cafes: cafes.value })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;