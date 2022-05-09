import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import store from './store/index.js'
import App from './App.vue'
import './index.css'
const app = createApp(App);
app.use(router).use(store)
app.mount('#app')
