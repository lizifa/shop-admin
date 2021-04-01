import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.configure({ showSpinner: false }).start()
  if (to.name !== 'login' && !store.state.auth.token) {
    next({
      name: 'login',
      query: {
        redirect: encodeURIComponent(location.href)
      }
    })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
