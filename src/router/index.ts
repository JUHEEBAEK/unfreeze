import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import GameView from "../views/selected/GameView.vue";
import ThemeView from "../views/selected/ThemeView.vue";
import LevelView from "../views/selected/LevelView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gameView",
    name: "GameView",
    component: GameView
  },
  {
    path: "/themeView",
    name: "ThemeView",
    component: ThemeView
  },
  {
    path: "/levelView",
    name: "LevelView",
    component: LevelView
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
