import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as dotenv from 'dotenv'; 
import App from './App.vue'
import router from './router'

dotenv.config();
const app = createApp(App)
app.use(createPinia());
app.use(router);

app.mount('#app')
