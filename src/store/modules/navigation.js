import { getCurRouter, getCollapseStatus } from '@/utils'

export default {
  namespaced: true,
  state: {
    asider: {
      list: getCurRouter()
    },
    isCollapse: getCollapseStatus()
  },
  mutations: {
    UPDATE_COLLAPSE_STATUS(state) {
      state.isCollapse = getCollapseStatus()
      console.log(state, 'store')
    }
  },
  actions: {},
  getters: {}
}
