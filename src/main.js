import { app } from './boostrap'
import './element-plus'
import router from './router'
app.use(router)
app.mount('#app')
