import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import { store } from './store';
import './assets/index.postcss';

const head = createHead();
const app = createApp(App);

app.use(store);
app.use(router);
app.use(head);

app.mount('#app');
