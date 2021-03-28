import dashboard from './dashboard'
import component from './component'
import config from './config'
import other from './other'

export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  dashboard,
  component,
  config,
  other,
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
  }
]
