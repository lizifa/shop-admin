import { getCollapseStatus } from '@/utils'
import { useBar } from '@/utils/hooks'
export default {
  namespaced: true,
  state: {
    asider: {
      list: useBar()
    },
    isCollapse: getCollapseStatus()
  },
  mutations: {
    UPDATE_COLLAPSE_STATUS(state) {
      state.isCollapse = getCollapseStatus()
    }
  },
  actions: {},
  getters: {}
}
