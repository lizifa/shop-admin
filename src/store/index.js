import { createStore } from 'vuex'

import tagsBar from './modules/tagsBar'
import auth from './modules/auth'
export default createStore({
  modules: {
    tagsBar,
    auth
  }
})
