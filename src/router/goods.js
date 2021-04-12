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
        import(/* webpackChunkName: "goodsindex" */ '@/pages/goods/page2.vue')
    },
    {
      path: '/goods/swiper',
      meta: {
        reddot: true,
        title: '轮播图配置',
        icon: '',
        active: false
      },
      component: () =>
        import(/* webpackChunkName: "goodsindex" */ '@/pages/goods/page1.vue')
    }
  ]
}
