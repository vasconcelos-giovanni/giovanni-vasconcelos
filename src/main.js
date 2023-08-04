import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { i18n } from './i18n';
import './styles/main.scss';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
