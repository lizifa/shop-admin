import dashboard from './dashboard'
import component from './component'
import config from './config'
import goods from './goods'

export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  dashboard,
  goods,
  component,
  config,
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/pages/error/404')
  },
  {
    path: '/403',
    name: '403',
    component: () => import(/* webpackChunkName: "403" */ '@/pages/error/403')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]
