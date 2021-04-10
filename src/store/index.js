import { createStore } from 'vuex'

import tag from './modules/tag'
import auth from './modules/auth'
import navigation from './modules/navigation'

export default createStore({
  modules: {
    tag,
    auth,
    navigation
  }
})
