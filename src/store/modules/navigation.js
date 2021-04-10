import { getCurRouter, getAsiderCollapseStatus } from '@/utils'

export default {
  namespaced: true,
  state: {
    asider: {
      list: getCurRouter()
    },
    isCollapse: getAsiderCollapseStatus()
  },
  mutations: {
    UPDATE_COLLAPSE_STATUS(state) {
      state.isCollapse = getAsiderCollapseStatus()
    }
  },
  actions: {},
  getters: {}
}
