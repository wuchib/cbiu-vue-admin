import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue, { PrimeVueConfiguration } from "primevue/config";
// @ts-ignore
import Lara from './presets/lara'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App)
app.component('Button',Button)
app.component('InputText',InputText)
app.use(PrimeVue,{
    unstyled: true,
    pt:Lara
} as PrimeVueConfiguration).mount('#app')
