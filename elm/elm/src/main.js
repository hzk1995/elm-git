import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "swiper/css/swiper.min.css"

import "@/stylesheets/main.scss"

import { Search,Cell } from 'mint-ui';

Vue.component('mt-search', Search);
Vue.component('mt-cell', Cell);

import axios from "axios"
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
