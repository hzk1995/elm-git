import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "swiper/css/swiper.min.css"

import "@/stylesheets/main.scss"
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
