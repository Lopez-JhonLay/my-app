import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MemoriesPage from "@/views/MemoriesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/memories",
    name: "Home",
    component: MemoriesPage,
  },
  {
    path: "/memories/:id",
    name: "MemoryDetail",
    component: () => import("@/views/MemoryDetailPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
