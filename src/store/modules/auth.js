import { localGet } from '@/utils'

export default {
  namespaced: true,
  state: {
    token: localGet('token')
  },
  mutations: {
    LOGIN(state, token) {
      state.token = token
    }
  },
  actions: {},
  getters: {}
}
