import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";
import done from "./modules/done";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todo,
    done
  }
});
