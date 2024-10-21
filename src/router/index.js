import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/LoginPage.vue';
import ForgotPasswordPage from '@/components/ForgotPassword.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/HeaderMenu.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPasswordPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
