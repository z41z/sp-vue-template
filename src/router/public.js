/**
 * 公共路由
 */

export const PUBLIC_ROUTES = [
  {
    path: '/',
    name: 'login',
    component: () => import('@pages/Login')
  }, {
    path: '*',
    name: '404',
    component: () => import('@pages/404')
  }
]