import Layout from '../boostrap/layout'
export default {
  path: '/other',
  component: Layout,
  meta: {
    reddot: true,
    name: 'other',
    title: '其他',
    icon: '',
    active: false,
    topMenu: true
  },
  redirect: '/other/index',
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
