import Layout from '../boostrap/layout'
export default {
  path: '/config',
  component: Layout,
  meta: {
    reddot: true,
    name: 'config',
    title: '配置',
    icon: '',
    active: false,
    topMenu: true
  },
  redirect: '/config/index',
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
