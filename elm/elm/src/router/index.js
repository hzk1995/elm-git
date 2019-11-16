import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from './home'
import Mine from './mine'
import Item from './item'
import Found from './found'
// import Detail from './detail'
import Evaluate from './evaluate.js'

Vue.use(VueRouter)



const router = new VueRouter({
  routes:[
    Home,Mine,Item,Found,Evaluate,
    {path:"/home/detail/:id",name:"detail",component:()=>import("@/views/Home/Detail")},
    {path:"/car",name:"car",component:()=>import("@/views/Home/Car")},
    {path:"/",redirect:'/home'},
    {path:"/mine/login",component:()=>import("@/views/Mine/login")},
  ]
})

export default router
