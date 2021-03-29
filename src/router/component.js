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
  redirect: '/component/poster',
  children: [
    {
      path: 'poster',
      meta: {
        reddot: true,
        name: '绘制海报',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'card',
      meta: {
        reddot: false,
        name: '绘制卡片',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'h5',
      meta: {
        reddot: false,
        name: '生成投放页面',
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
