import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/css/main.css';

createApp(App).use(router).mount('#app')
