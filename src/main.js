import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from '/src/router.js'


const app = createApp(App);
app.use(router);
app.mount('#app');