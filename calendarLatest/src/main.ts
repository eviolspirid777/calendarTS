import { createApp } from 'vue'
import App from '../src/App.vue'
import { createPinia } from "pinia"
import "../src/styles/reset.css"
 
createApp(App).use(createPinia()).mount('#app')
