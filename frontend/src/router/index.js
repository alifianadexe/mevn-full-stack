import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Posts from "@/components/Posts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  }
];

const router = new VueRouter({
  routes
});

export default router;
