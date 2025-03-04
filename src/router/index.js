import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../views/HomePage.vue'; // Ensure this file exists

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
