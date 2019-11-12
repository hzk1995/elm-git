import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from './home.js'
import Mine from './mine.js'
import Item from './item.js'
import Found from './found.js'

Vue.use(VueRouter)


 

const router = new VueRouter({
  routes:[
	  Home,Mine,Item,Found
  ]
})

export default router
