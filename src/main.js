import Vue from 'vue'
import App from './App'
//引入配置的路由
import router from './router'

import Header from './common/Header/Header.vue'

//注册全局组件（此组件是公共的，即可注册全局的组件，方便全局都可以使用）
Vue.component('Header',Header)

new Vue({
  el:'#app',
  /* components:{App},
  template:'<App/>'//标签格式的字符串 */
  render:h=>h(App),
  router //配置路由器

})
