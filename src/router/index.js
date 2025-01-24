import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/landingPage/landingPage.vue";
import HomePage from "../pages/homePage/homePage.vue";

const routes = [
  { path: "/", name: "Landing", component: LandingPage },
  { path: "/inicio", name: "Home", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
