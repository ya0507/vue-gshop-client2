import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Prifile from '../pages/Prifile/Prifile.vue'
import Login  from '../pages/Login/Login.vue'

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
     }

  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/prifile',
    component: Prifile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login,

  },
  {
    path: '/', // 项目根路径
    redirect: '/msite'
  }
]
