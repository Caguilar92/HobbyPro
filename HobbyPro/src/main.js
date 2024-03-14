import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {router} from "@/router/index.js";
import App from "@/App.vue";
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
