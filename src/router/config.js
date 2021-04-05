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
      path: '/config/personal',
      meta: {
        reddot: false,
        title: '个人中心',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "configpersonal" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: '/config/user',
      meta: {
        reddot: true,
        title: '用户管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "configuser" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: '/config/role',
      meta: {
        reddot: true,
        title: '角色管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "configrole" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: '/config/department',
      meta: {
        reddot: true,
        title: '部门管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "configdepartment" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: '/config/menu',
      meta: {
        reddot: true,
        title: '菜单管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "configmenu" */ '@/pages/dashboard/index.vue'
        )
    },
    {
      path: '/config/log',
      meta: {
        reddot: true,
        title: '日志管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "configlog" */ '@/pages/dashboard/index.vue'
        )
    }
  ]
}
