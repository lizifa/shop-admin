import { routes } from '@/router/routes'
let HomeEntry = routes.find(v => v.path === '/dashboard').children[0]

export default {
  namespaced: true,
  state: {
    visitedRoutes: [HomeEntry]
  },
  getters: {},
  mutations: {
    COMMIT_TAG(state, data) {
      let existed = state.visitedRoutes.find(v => v.path === data.path)
      !existed && state.visitedRoutes.push(data)
    },
    DELETE_TAG(state, index) {
      state.visitedRoutes.splice(index, 1)
    }
  },
  actions: {}
}
