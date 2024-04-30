import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import RegPage from "@/components/RegPage.vue";
import StudReg from "@/components/StudReg.vue";
import TeachReg from "@/components/TeachReg.vue";
import GamePage from "@/components/GamePage.vue";
import MyCab from "@/components/MyCab.vue";
import MyClass from "@/components/MyClass.vue";
import LoginPage from "@/components/LoginPage.vue";
import MapPage from "@/components/MapPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },

    {
      path: "/regpage",
      component: RegPage,
    },
    {
      path: "/studreg",
      component: StudReg,
    },
    {
      path: "/teachreg",
      component: TeachReg,
    },
    {
      path: "/gamepage",
      component: GamePage,
    },
    {
      path: "/mycab",
      component: MyCab,
    },
    {
      path: "/myclass",
      component: MyClass,
    },
    {
      path: "/loginpage",
      component: LoginPage,
    },
    {
      path: "/mappage",
      component: MapPage,
    },
  ],
});

export default router;
