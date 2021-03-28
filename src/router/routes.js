import Layout from '../boostrap/layout'
export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard'),
        meta: {
          title: '控制台',
          icon: 'home-4-line'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login'),
    meta: {
      index: 1
    }
  }
]
