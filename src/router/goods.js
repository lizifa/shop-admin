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
        title: '列表',
        icon: '',
        active: false
      },
      component: () =>
        import(/* webpackChunkName: "goodsindex" */ '@/pages/goods/page3.vue')
    },
    {
      path: '/goods/swiper',
      meta: {
        reddot: true,
        title: '表单',
        icon: '',
        active: false
      },
      component: () =>
        import(/* webpackChunkName: "goodsindex" */ '@/pages/goods/page1.vue')
    }
  ]
}
