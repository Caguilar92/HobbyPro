import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {router} from "@/router/index.js";
import App from "@/App.vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
