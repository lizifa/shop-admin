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
      path: '/dashboard/index',
      meta: {
        reddot: true,
        name: '控制台',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboardindex" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: '/dashboard/export',
      meta: {
        reddot: true,
        name: '数据导出',
        icon: '',
        active: false
      },
      children: [
        {
          path: '/dashboard/index/a',
          meta: {
            reddot: true,
            name: '测试数据a',
            icon: '',
            active: false
          },
          component: () =>
            import(
              /* webpackChunkName: "dashboardindex" */ '@/pages/dashboard/index.vue'
            )
        },
        {
          path: '/dashboard/index/b',
          meta: {
            reddot: true,
            name: '测试数据b',
            icon: '',
            active: false
          },
          component: () =>
            import(
              /* webpackChunkName: "dashboardindex" */ '@/pages/dashboard/index.vue'
            )
        }
      ],
      component: () =>
        import(
          /* webpackChunkName: "dashboardexport" */ '@/pages/dashboard/index.vue'
        )
    }
  ]
}
