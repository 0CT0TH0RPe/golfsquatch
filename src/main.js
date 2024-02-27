// main.js
import { createApp } from 'vue';
import App from './App.vue';
import LandingPage from './views/LandingPage.vue';

import './style.css';

// Import Vue Router
import router from './router';

const app = createApp(App);

// Register the LandingPage component globally
app.component('LandingPage', LandingPage);

// Use Vue Router
app.use(router);

app.mount('#app');
