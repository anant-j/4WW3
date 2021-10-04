import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './plugins/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/css/main.css';

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')

