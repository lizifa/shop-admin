import Layout from '../boostrap/layout'
export default {
  path: '/goods',
  component: Layout,
  meta: {
    reddot: true,
    name: 'goods',
    title: '商品',
    icon: '',
    active: false,
    topMenu: true
  },
  redirect: '/goods/index',
  children: [
    {
      path: 'index',
      meta: {
        reddot: true,
        name: '商品管理',
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
        name: '物流管理',
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
