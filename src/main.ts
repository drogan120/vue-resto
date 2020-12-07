import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import './assets/scss/tailwind.sass';

createApp(App).use(router).mount('#app');
