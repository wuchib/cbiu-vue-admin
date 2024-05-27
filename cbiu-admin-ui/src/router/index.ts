import { createRouter,createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        { path:'/login',component:Login },
        { path:'/',component:Layout }
    ]
})

export default router