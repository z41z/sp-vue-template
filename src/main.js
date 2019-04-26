import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getCoupon } from '@api'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

// 通过接口添加动态路由
getCoupon().then(menus => {
  menus = [{
    path: '/',
    name: 'home',
    menuName: '首页',
    component: './pages/Home'
  }, {
    path: '/about',
    name: 'about',
    menuName: '关于',
    component: './pages/About'
  }, {
    path: '/help',
    name: 'help',
    menuName: '帮助',
    component: './pages/Help'
  }]
  menus.forEach(item => {
    router.addRoutes([
      {
        path: item.path,
        name: item.name,
        // component: () => import(/* webpackChunkName: "about" */ item.component)
        component: () => import(`${item.component}`)
      }
    ])
  })
  // 菜单
  router.menus = menus;
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
