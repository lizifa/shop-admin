import Layout from '../boostrap/layout'
export default {
  path: '/component',
  component: Layout,
  meta: {
    reddot: true,
    name: 'component',
    title: '组件',
    icon: '',
    active: false,
    topMenu: true
  },
  redirect: '/component/index',
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
