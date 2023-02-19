import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

// importing AOS css style globally
import 'aos/dist/aos.css';

// importing Animate style style globally
import 'animate.css';

import '@/assets/scss/main.scss';

createApp(App).use(createPinia()).use(router).mount('#app');




