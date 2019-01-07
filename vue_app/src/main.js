import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//5: 设置请求的根路径 

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//引入轮播
import {Swipe,SwipeItem,Button,Toast} from "mint-ui"
//引入navbar
import {Navbar,TabItem} from "mint-ui"
import {TabContainer,TabContainerItem} from "mint-ui"
import {Cell} from "mint-ui"
//注册
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//注册导航
Vue.component(Navbar.name,Navbar);
Vue.component(TabItem.name,TabItem);
Vue.component(TabContainer.name,TabContainer);
Vue.component(TabContainerItem.name,TabContainerItem);
Vue.component(Cell.name,Cell);

//引入注册vue-resource库
import VueResource from "vue-resource";
Vue.use(VueResource);
//配置vue-resource属性
Vue.http.options.root = "http://127.0.0.1:3300/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

import axios from "axios"
//配置属性 跨域保存session值
axios.defaults.withCredentials=true;
//注册组件
Vue.prototype.axios=axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
