/**
 * 路由
 */
import Router from 'vue-router'
import { PUBLIC_ROUTES } from '@router/public'

/**
 * 路由递归设置动态路由
 * @param {Object} router 路由实例
 * @param {Array} routes 路由
 */
const _setRoutes = (router, routes) => {
  routes.forEach(route => {
    let { path, name, component } = route
    router.addRoutes([
      {
        path,
        name,
        component: () => import(`../pages/${component}`)
      }
    ])
    if (route.children && route.children.length) {
      route.children.forEach(item => {
        item.path = route.path + item.path
      })
      _setRoutes(router, route.children)
    }
  })
}

/**
 * 设置路由
 * @param {Object} router router实例
 * @param {Array} routes 路由
 */
export const setRoutes = (router, routes) => {
  router.matcher = new Router(
    {
      mode: router.mode,
      routes: PUBLIC_ROUTES
    }).matcher

  if (routes.length) {
    _setRoutes(router, routes)
    router.routes = routes
  } else {
    // 本地不存在routes时路由空白 App.vue:19
    router.addRoutes([])
  }
}