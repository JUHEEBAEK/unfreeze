import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import GameList from "../views/selected/GameList.vue";
import ThemeList from "../views/selected/ThemeList.vue";
import LevelList from "../views/selected/LevelList.vue";
import ChoSung from "@/components/Game/ChoSung";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/game/list",
    name: "GameList",
    component: GameList
  },
  {
    path: "/game/:idfGame/theme",
    name: "ThemeList",
    component: ThemeList,
    props: true
  },
  {
    path: "/game/:idfGame/theme/:idfTheme",
    name: "LevelList",
    component: LevelList,
    props: true
  },
  {
    path: "/game/:idfGame/theme/:idfTheme/level/:level",
    name: "ChoSungGame",
    component: ChoSung,
    props: true
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
