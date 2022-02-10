import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import { store } from './store';
import './assets/index.postcss';
import 'flowbite';

// vue-query
import { VueQueryPlugin } from 'vue-query';

const head = createHead();
const app = createApp(App);

app.use(store);
app.use(router);
app.use(head);
app.use(VueQueryPlugin);

app.mount('#app');
