/**
 * 路由
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  menus: []
  // routes:[] 路由写在public.js里面
})