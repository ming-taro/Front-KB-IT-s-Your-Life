
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import BoardList from '@/pages/BoardList.vue'
import BoardCreate from '@/pages/BoardCreate.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name: "Home", component: Home },
        { path: '/list', name: "BoardList", component: BoardList },
        { path: '/list/board_create', name: "BoardCreate", component: BoardCreate },
    ]
})

export default router;