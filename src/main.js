import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming your router is in a file named router.js or router.ts

const app = createApp(App);

app.use(router);
app.mount('#app');