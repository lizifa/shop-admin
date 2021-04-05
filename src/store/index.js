import { createStore } from 'vuex'

import tag from './modules/tag'
import auth from './modules/auth'
export default createStore({
  modules: {
    tag,
    auth
  }
})
