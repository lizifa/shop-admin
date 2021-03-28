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
  redirect: '/dashboard/index',
  children: [
    {
      path: 'index',
      meta: {
        reddot: true,
        name: '组件一',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'index2',
      meta: {
        reddot: true,
        name: '组件二',
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
