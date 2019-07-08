/* 路由器对象模块
 */

 import Vue from 'vue'
 import VueRouter from 'vue-router'
import routes from './routes'


/* 声明使用插件 */
Vue.use(VueRouter)
export default new VueRouter({//配置对象
  //配置路由
  routes
})
