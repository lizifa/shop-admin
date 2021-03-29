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
  redirect: '/other',
  children: [
    {
      path: '',
      meta: {
        reddot: true,
        name: '错误页面',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: '404',
      meta: {
        reddot: true,
        name: '404页面',
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
