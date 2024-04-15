import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {router} from "@/router/index.js";
import App from "@/App.vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'popper.js/dist/umd/popper.min.js'
import store from './stores/index'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')
