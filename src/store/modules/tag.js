import { routes } from '@/router/routes'
let HomeEntry = routes.find(v => v.path === '/dashboard').children[0]
console.log(HomeEntry)
export default {
  state: {
    visitedRoutes: [HomeEntry]
  },
  getters: {
    visitedRoutes: state => state.visitedRoutes
  },
  mutations: {},
  actions: {}
}
