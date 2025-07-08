//引入createAPP用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'
//引入路由器
import router from './router'

const app = createApp(App)

//使用路由器
app.use(router)

app.mount('#app')