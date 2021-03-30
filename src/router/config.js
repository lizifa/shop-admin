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
  redirect: '/config/personal',
  children: [
    {
      path: 'personal',
      meta: {
        reddot: false,
        name: '个人中心',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'user',
      meta: {
        reddot: true,
        name: '用户管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'role',
      meta: {
        reddot: true,
        name: '角色管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'department',
      meta: {
        reddot: true,
        name: '部门管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'menu',
      meta: {
        reddot: true,
        name: '菜单管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'log',
      meta: {
        reddot: true,
        name: '日志管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: 'error',
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
