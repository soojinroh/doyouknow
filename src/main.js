import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';


const viewApp = createApp(App);
viewApp.use(router).mount('#app');
viewApp.use(createPinia());

import 'bootstrap/dist/js/bootstrap.js';
