import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "@/components/Posts";
import addpost from "@/components/AddPost";
import editpost from "@/components/EditPost";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts
  },
  {
    path: "/posts/add",
    name: "addpost",
    component: addpost
  },
  {
    path : '/posts/:id/edit',
    name : 'editpost',
    component :  editpost

  }
];

const router = new VueRouter({
  routes
});

export default router;
