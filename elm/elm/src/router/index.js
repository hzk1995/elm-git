import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from './home'
import Mine from './mine'
import Item from './item'
import Found from './found'
// import Detail from './detail'

Vue.use(VueRouter)


 

const router = new VueRouter({
  routes:[
    Home,Mine,Item,Found,
    {path:"/home/detail",name:"detail",component:()=>import("@/views/Home/Detail")}
  ]
})

export default router
