import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { Swipe, SwipeItem } from 'vant';
import '@vant/touch-emulator';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';

const app = createApp(App);
app.use(Swipe);
app.use(SwipeItem);

app.use(router).use(store).mount('#app');
