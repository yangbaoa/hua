import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/tabbar/Home.vue"
import Duo from "./components/list/Duo.vue"
import Lvzhi from "./components/list/Lvzhi.vue"
import Yuan from "./components/list/Yuan.vue"
import Detail from "./components/list/Detail.vue"
import Detaill from "./components/list/Detaill.vue"
import Detaily from "./components/list/Detaily.vue"
import Recommended from "./components/recomm/Recommended.vue"
import Login from "./components/login/Login.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/duo',component:Duo},
    {path:'/lvz',component:Lvzhi},
    {path:'/yuan',component:Yuan},
    {path:'/detail',component:Detail},
    {path:'/detaill',component:Detaill},
    {path:'/detaily',component:Detaily},
    {path:'/recommended',component:Recommended},
    {path:'/login',component:Login}
  ]
})
