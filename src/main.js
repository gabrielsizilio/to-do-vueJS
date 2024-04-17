import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/css/main.css";
import store from './store'

createApp(App).use(store).use(store).mount('#app')
