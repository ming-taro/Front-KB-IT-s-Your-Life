import { createRouter, createWebHistory } from 'vue-router'
import AxiosBox from '@/pages/AxiosBox.vue';
import AsyncBox from '@/pages/AsyncBox.vue';
import PostBox from '@/pages/PostBox.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: AxiosBox},
        { path: "/async-box", component: AsyncBox},
        { path: "/post-box", component: PostBox},
    ]
});

export default router;