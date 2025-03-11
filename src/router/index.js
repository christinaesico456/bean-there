import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserProfile from "../views/UserProfile.vue";
import SearchResults from "../views/SearchResults.vue";
import { ref } from 'vue';

const cafes = ref([]);

fetch('http://localhost:8000/api/cafes/')
  .then(response => response.json())
  .then(data => {
    cafes.value = data;
  })
  .catch(error => console.error('Error:', error));

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