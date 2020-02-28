import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import HeaderNavigation from '@/layouts/HeaderNavigation.vue';

Vue.component('header-navigation', HeaderNavigation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
