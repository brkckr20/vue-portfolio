import { createRouter, createWebHistory } from 'vue-router';
import auth from './auth.js';

import Admin from './pages/Admin/Home.vue'
import Login from './pages/Admin/Login.vue';
import HomePage from './components/HomePage.vue';
import About from './pages/Admin/About.vue';
import WhatIDo from './pages/Admin/WhatIDo.vue';
import Resume from './pages/Admin/Resume.vue';
import HomeV2 from './v2/pages/HomeV2.vue';

const routes = [
    { path: "/", component: HomeV2 },
    { path: "/admin", component: Admin, meta: { requiresAuth: true } },
    { path: "/admin/about", component: About, meta: { requiresAuth: true } },
    { path: "/admin/skill", component: WhatIDo, meta: { requiresAuth: true } },
    { path: "/admin/resume", component: Resume, meta: { requiresAuth: true } },
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
