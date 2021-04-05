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
      path: '/goods/index',
      meta: {
        reddot: true,
        title: '商品管理',
        icon: '',
        active: false
      },
      component: () =>
        import(
          /* webpackChunkName: "goodsindex" */ '@/pages/dashboard/index.vue'
        )
    }
  ]
}
