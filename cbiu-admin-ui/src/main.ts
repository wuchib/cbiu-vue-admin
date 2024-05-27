import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from '@/router/index.ts'
// @ts-ignore
import Lara from './presets/lara'

const app = createApp(App)
app.use(router).use(PrimeVue,{
    unstyled: true,
    pt:Lara
}).mount('#app')
