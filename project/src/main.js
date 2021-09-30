import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).mount('#app')
