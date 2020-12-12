import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import './assets/scss/tailwind.sass';

const app = createApp(App);
app.use(router);
app.mount('#app');
