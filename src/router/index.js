import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "@/views/Todo.vue";
import Done from "@/views/Done.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  },
  {
    path: "/done",
    name: "Done",
    component: Done
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
