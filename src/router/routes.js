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
  }
]
