import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/index.vue"
const routes = [
    {
        path:'/',
        name:'home',
        component:Home,
    },
    {
        path:'/todo',
        name: 'todo',
        component: () => import('@/views/todo/index.vue')
    }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;