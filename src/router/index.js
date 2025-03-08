import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path:"profile",
    name:"userProfile",
    component: UserProfile
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
