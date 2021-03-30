import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.configure({ showSpinner: false }).start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
