import Vue from 'vue'
import Router from 'vue-router'
import publicRoutes from '@router/public'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: publicRoutes
})
