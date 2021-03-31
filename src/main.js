import { app } from './boostrap'
import './element-plus'
import router from './router'
import store from './store'

app.use(router).use(store)
app.mount('#app')
