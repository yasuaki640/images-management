import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import CategoryTop from "@/views/category/CategoryTop.vue";
import { useVerifyLoggedIn } from "@/hooks/useVerifyLoggedIn";

const { isLoggedIn, verifyLoggedIn } = useVerifyLoggedIn();

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "CategoryTop",
    component: CategoryTop
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () => import("@/views/admin/AdminLogin.vue")
  },
  {
    path: "/admin/category/list",
    name: "AdminCategoryList",
    component: () => import("@/views/admin/category/AdminCategoryList.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/category/detail/:id",
    name: "AdminCategoryDetail",
    component: () => import("@/views/admin/category/AdminCategoryDetail.vue"),
    props: (routes) => {
      const id = +routes.params.id;
      return { id };
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/category/edit/:id",
    name: "AdminCategoryEdit",
    component: () => import("@/views/admin/category/AdminCategoryEdit.vue"),
    props: (routes) => {
      const id = +routes.params.id;
      return { id };
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/category/add",
    name: "AdminCategoryAdd",
    component: () => import("@/views/admin/category/AdminCategoryAdd.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/admin/category/:id/image/add",
    name: "AdminCategoryImageAdd",
    component: () => import("@/views/admin/category/AdminCategoryImageAdd.vue"),
    props: (routes) => {
      const id = +routes.params.id;
      return { id };
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/category/list",
    name: "CategoryList",
    component: () => import("@/views/category/CategoryList.vue")
  },
  {
    path: "/category/detail/:id",
    name: "CategoryDetail",
    component: () => import("@/views/category/CategoryDetail.vue"),
    props: (routes) => {
      const id = +routes.params.id;
      return { id };
    }
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to) => {
  await verifyLoggedIn();
  if (to.meta.requiresAuth && !isLoggedIn.value) {
    return { name: "AdminLogin" };
  }
});

export default router;
