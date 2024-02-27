// router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import About from './views/About.vue';
import Clubs from './shared/Clubs.vue';
import Equipment from './shared/Equipment.vue';
import Apparel from './shared/Apparel.vue';
import Blog from './views/Blog.vue';
import Contact from './views/Contact.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/about', component: About },
    { path: '/clubs', component: Clubs },
    { path: '/equipment', component: Equipment },
    { path: '/apparel', component: Apparel },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
