import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import GameList from "../views/selected/GameList.vue";
import ThemeList from "../views/selected/ThemeList.vue";
import ThemeMain from "../views/selected/ThemeMain.vue";
import ThemeViews from "../views/selected/ThemeViews.vue";
import LevelList from "../views/selected/LevelList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gameList",
    name: "GameList",
    component: GameList
  },
  {
    path: "/theme",
    name: "ThemeMain",
    redirect: { name: "ThemeList" },
    component: ThemeMain,
    children: [
      {
        path: "",
        name: "ThemeList",
        component: ThemeList
      },
      {
        path: ":value",
        name: "ThemeViews",
        component: ThemeViews
      }
    ]
  },
  {
    path: "/levelList",
    name: "LevelList",
    component: LevelList
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
