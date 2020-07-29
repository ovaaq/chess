import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bulma",
    name: "Bulma",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Bulma.vue"),
  },
  {
    path: "/chess",
    name: "Chess",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Chess.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
