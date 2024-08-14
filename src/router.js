import { createRouter, createWebHistory } from 'vue-router';
import auth from './auth';

import Admin from './pages/Admin/Home.vue'
import Login from './pages/Admin/Login.vue';
import HomePage from './components/HomePage.vue';

const routes = [
    { path: "/", component: HomePage },
    { path: "/admin", component: Admin, meta: { requiresAuth: true } },
    { path: "/login", component: Login }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthentication = auth.state.isAuthentication;
    if (to.meta.requiresAuth && !isAuthentication) {
        next("/login")
    } else {
        next();
    }
})

export default router;