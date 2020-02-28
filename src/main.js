import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import HeaderNavigation from '@/layouts/HeaderNavigation.vue';
import FooterButtons from '@/layouts/FooterButtons.vue'

Vue.component('header-navigation', HeaderNavigation);
Vue.component('footer-buttons', FooterButtons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
