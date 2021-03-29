import Layout from '../boostrap/layout'
export default {
  path: '/dashboard',
  component: Layout,
  meta: {
    reddot: true,
    name: 'dashboard',
    title: '控制台',
    icon: '',
    active: false,
    topMenu: true
  },
  redirect: '/dashboard',
  children: [
    {
      path: '',
      meta: {
        reddot: true,
        name: '控制台',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'export',
      meta: {
        reddot: true,
        name: '数据导出',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    }
  ]
}
